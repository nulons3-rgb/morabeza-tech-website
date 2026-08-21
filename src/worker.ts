interface AssetsBinding {
  fetch(request: Request): Promise<Response>;
}

interface Env {
  ASSETS: AssetsBinding;
  RESEND_API_KEY?: string;
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

interface ContactPayload {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  budget: string;
  message: string;
  website: string;
  consent: boolean;
  locale: 'nl' | 'pt' | 'en';
}

const limits = { name: 120, company: 160, email: 254, phone: 50, subject: 120, budget: 100, message: 5000 } as const;
const attempts = new Map<string, { count: number; resetAt: number }>();
const windowMs = 10 * 60 * 1000;
const maxAttempts = 5;

const json = (body: Record<string, unknown>, status = 200, headers: Record<string, string> = {}) => new Response(JSON.stringify(body), {
  status,
  headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', ...headers }
});

const textValue = (value: unknown) => typeof value === 'string' ? value : '';
const clean = (value: unknown, max: number) => textValue(value).replace(/\r\n/g, '\n').trim().slice(0, max);
const plain = (value: unknown, max: number) => clean(value, max).replace(/[ \t]+/g, ' ').replace(/\n{3,}/g, '\n\n');

function allowedOrigin(request: Request) {
  const origin = request.headers.get('Origin');
  return !origin || origin === new URL(request.url).origin;
}

function clientKey(request: Request) {
  return request.headers.get('CF-Connecting-IP') || request.headers.get('X-Forwarded-For')?.split(',')[0].trim() || 'unknown';
}

function rateLimited(key: string) {
  const now = Date.now();
  const current = attempts.get(key);
  if (!current || current.resetAt <= now) {
    attempts.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }
  current.count += 1;
  return current.count > maxAttempts;
}

async function readPayload(request: Request): Promise<Record<string, unknown> | null> {
  const contentType = request.headers.get('Content-Type') || '';
  if (contentType.includes('application/json')) {
    const value = await request.json();
    return value && typeof value === 'object' && !Array.isArray(value) ? value as Record<string, unknown> : null;
  }
  if (contentType.includes('multipart/form-data') || contentType.includes('application/x-www-form-urlencoded')) {
    const form = await request.formData();
    return Object.fromEntries(form.entries());
  }
  return null;
}

function normalizePayload(input: Record<string, unknown>): ContactPayload {
  const locale = ['nl', 'pt', 'en'].includes(textValue(input.locale)) ? textValue(input.locale) as ContactPayload['locale'] : 'nl';
  const consent = input.consent === true || ['true', 'on', 'yes', '1'].includes(textValue(input.consent).toLowerCase());
  return {
    name: plain(input.name, limits.name), company: plain(input.company, limits.company), email: plain(input.email, limits.email).toLowerCase(),
    phone: plain(input.phone, limits.phone), subject: plain(input.subject, limits.subject), budget: plain(input.budget, limits.budget),
    message: clean(input.message, limits.message), website: clean(input.website, 200), consent, locale
  };
}

function validate(payload: ContactPayload) {
  if (!payload.name || !payload.email || !payload.subject || !payload.message || !payload.consent) return 'required';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(payload.email)) return 'email';
  return null;
}

const labels = {
  nl: { subject: 'Nieuwe aanvraag — Morabeza Tech', language: 'Nederlands', name: 'Naam', company: 'Bedrijfsnaam', email: 'E-mail', phone: 'Telefoonnummer', topic: 'Dienst / onderwerp', budget: 'Budget', message: 'Bericht', languageField: 'Taal van de website', dateTime: 'Datum / tijd' },
  pt: { subject: 'Novo pedido — Morabeza Tech', language: 'Português', name: 'Nome', company: 'Nome da empresa', email: 'E-mail', phone: 'Telefone', topic: 'Serviço / assunto', budget: 'Orçamento', message: 'Mensagem', languageField: 'Idioma do website', dateTime: 'Data / hora' },
  en: { subject: 'New enquiry — Morabeza Tech', language: 'English', name: 'Name', company: 'Company', email: 'Email', phone: 'Phone number', topic: 'Service / subject', budget: 'Budget', message: 'Message', languageField: 'Website language', dateTime: 'Date / time' }
} as const;

function emailContent(payload: ContactPayload) {
  const copy = labels[payload.locale];
  const rows = [[copy.name, payload.name], [copy.company, payload.company || '-'], [copy.email, payload.email], [copy.phone, payload.phone || '-'], [copy.topic, payload.subject], [copy.budget, payload.budget || '-'], [copy.languageField, copy.language], [copy.dateTime, new Date().toISOString()], [copy.message, payload.message]];
  const text = rows.map(([label, value]) => `${label}:\n${value}`).join('\n\n');
  const html = rows.map(([label, value]) => `<p><strong>${label}</strong><br>${value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>')}</p>`).join('');
  return { subject: copy.subject, text, html };
}

async function contact(request: Request, env: Env) {
  if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: { 'Access-Control-Allow-Origin': new URL(request.url).origin, 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' } });
  if (request.method !== 'POST') return json({ success: false, error: 'Method not allowed.' }, 405, { Allow: 'POST, OPTIONS' });
  if (!allowedOrigin(request)) return json({ success: false, error: 'Invalid origin.' }, 403);
  if (rateLimited(clientKey(request))) return json({ success: false, error: 'Too many requests. Please try again later.' }, 429, { 'Retry-After': '600' });
  let input: Record<string, unknown> | null;
  try { input = await readPayload(request); } catch { input = null; }
  if (!input) return json({ success: false, error: 'Invalid request.' }, 400);
  const payload = normalizePayload(input);
  if (payload.website) return json({ success: true });
  const issue = validate(payload);
  if (issue) return json({ success: false, error: issue === 'email' ? 'Invalid email address.' : 'Please complete the required fields.' }, 400);
  if (!env.RESEND_API_KEY) return json({ success: false, error: 'Contact service is not configured.' }, 503);
  const content = emailContent(payload);
  try {
    const response = await fetch('https://api.resend.com/emails', { method: 'POST', headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ from: 'Morabeza Tech CV <website@send.morabezatech.com>', to: ['info@morabezatech.com'], reply_to: payload.email, subject: content.subject, text: content.text, html: content.html }) });
    if (!response.ok) { console.error('contact_email_failed', response.status); return json({ success: false, error: 'Unable to send your request right now.' }, 502); }
    return json({ success: true });
  } catch (error) { console.error('contact_email_exception', error); return json({ success: false, error: 'Unable to send your request right now.' }, 502); }
}

export default {
  async fetch(request: Request, env: Env, _ctx: ExecutionContext) {
    const url = new URL(request.url);
    if (url.pathname === '/api/contact') return contact(request, env);
    return env.ASSETS.fetch(request);
  }
};
