export const locales = ['pt', 'en', 'nl'] as const;
export type Locale = (typeof locales)[number];

export const pageKeys = ['home', 'services', 'packages', 'about', 'portfolio', 'contact', 'privacy', 'cookies'] as const;
export type PageKey = (typeof pageKeys)[number];

export const routeMap: Record<Locale, Record<PageKey, string>> = {
  nl: { home: '', services: 'diensten', packages: 'pakketten', about: 'over-ons', portfolio: 'portfolio', contact: 'contact', privacy: 'privacybeleid', cookies: 'cookiebeleid' },
  pt: { home: '', services: 'servicos', packages: 'pacotes', about: 'sobre-nos', portfolio: 'portfolio', contact: 'contacto', privacy: 'politica-de-privacidade', cookies: 'politica-de-cookies' },
  en: { home: '', services: 'services', packages: 'packages', about: 'about', portfolio: 'portfolio', contact: 'contact', privacy: 'privacy', cookies: 'cookies' }
};

export function localizedPath(locale: Locale, page: PageKey): string {
  const slug = routeMap[locale][page];
  return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

export function getPageFromSlug(locale: Locale, slug?: string): PageKey | undefined {
  if (!slug) return 'home';
  return pageKeys.find((key) => routeMap[locale][key] === slug);
}

export function getLocaleFromPath(pathname: string): Locale {
  const candidate = pathname.split('/').filter(Boolean)[0];
  return locales.includes(candidate as Locale) ? (candidate as Locale) : 'pt';
}
