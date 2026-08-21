import type { Locale } from './routes';

export interface VisualCopy {
  systemEyebrow: string;
  systemTitle: string;
  systemIntro: string;
  systemNote: string;
  systemItems: Array<{ label: string; detail: string }>;
  servicesPhotoAlt: string;
  heroPhotoAlt: string;
  homePhotoAlt: string;
  aboutPhotoAlt: string;
  mockupKicker: string;
  mockupTitle: string;
  mockupStats: string[];
  browserPath: string;
  systemBrowserKicker: string;
  systemBrowserTitle: string;
  systemBrowserFooter: string[];
}

const visualCopy: Record<Locale, VisualCopy> = {
  nl: {
    systemEyebrow: 'Eén digitale basis',
    systemTitle: 'Alles verbonden in één digitale ervaring.',
    systemIntro: 'Een website is sterker wanneer de routes eromheen kloppen. We ontwerpen de verbinding tussen zichtbaarheid, vertrouwen en contact.',
    systemNote: 'Capability demonstration — geen klantcase',
    systemItems: [
      { label: 'Website', detail: 'De digitale basis' },
      { label: 'Google', detail: 'Gevonden worden' },
      { label: 'WhatsApp', detail: 'Direct contact' },
      { label: 'Reserveringen', detail: 'Actie eenvoudiger maken' },
      { label: 'Reviews', detail: 'Vertrouwen versterken' },
      { label: 'SEO', detail: 'Structureel zichtbaar' }
    ],
    servicesPhotoAlt: 'Professionele medewerker die een tablet gebruikt in een zakelijke werkomgeving',
    heroPhotoAlt: 'Ondernemer werkt geconcentreerd met een laptop in een professionele bedrijfsomgeving',
    homePhotoAlt: 'Twee professionals bespreken bedrijfsactiviteiten met een laptop in een zakelijke horecaruimte',
    aboutPhotoAlt: 'Hospitaliteitsprofessional bereidt een klantgerichte bedrijfsruimte voor',
    mockupKicker: 'Digitale aanwezigheid', mockupTitle: 'Helderheid die bedrijven vooruithelpt.', mockupStats: ['SNEL / 98', 'LOKAAL / CV', 'KLAAR / 24'], browserPath: 'morabezatech.com / digitaal', systemBrowserKicker: 'LOKAAL / DIGITAAL', systemBrowserTitle: 'Vind. Vertrouw. Verbind.', systemBrowserFooter: ['Helderheid', 'Bereik', 'Contact']
  },
  pt: {
    systemEyebrow: 'Uma base digital',
    systemTitle: 'Tudo ligado numa experiência digital única.',
    systemIntro: 'Um website é mais forte quando as rotas à sua volta funcionam. Criamos a ligação entre visibilidade, confiança e contacto.',
    systemNote: 'Demonstração de capacidade — não é um caso de cliente',
    systemItems: [
      { label: 'Website', detail: 'A base digital' },
      { label: 'Google', detail: 'Ser encontrado' },
      { label: 'WhatsApp', detail: 'Contacto direto' },
      { label: 'Reservas', detail: 'Facilitar a ação' },
      { label: 'Avaliações', detail: 'Reforçar a confiança' },
      { label: 'SEO', detail: 'Visibilidade consistente' }
    ],
    servicesPhotoAlt: 'Profissional a utilizar um tablet num ambiente empresarial',
    heroPhotoAlt: 'Empresário a trabalhar concentrado num portátil num ambiente profissional',
    homePhotoAlt: 'Dois profissionais a discutir operações empresariais com um portátil num espaço de restauração',
    aboutPhotoAlt: 'Profissional de hospitalidade a preparar um espaço de atendimento ao cliente',
    mockupKicker: 'Presença digital', mockupTitle: 'Clareza que faz o negócio avançar.', mockupStats: ['RÁPIDO / 98', 'LOCAL / CV', 'PRONTO / 24'], browserPath: 'morabezatech.com / digital', systemBrowserKicker: 'LOCAL / DIGITAL', systemBrowserTitle: 'Encontre. Confie. Contacte.', systemBrowserFooter: ['Clareza', 'Alcance', 'Contacto']
  },
  en: {
    systemEyebrow: 'One digital foundation',
    systemTitle: 'Everything connected in one digital experience.',
    systemIntro: 'A website is stronger when the routes around it work. We design the connection between visibility, trust and contact.',
    systemNote: 'Capability demonstration — not a client case',
    systemItems: [
      { label: 'Website', detail: 'The digital foundation' },
      { label: 'Google', detail: 'Be found' },
      { label: 'WhatsApp', detail: 'Direct contact' },
      { label: 'Reservations', detail: 'Make action easier' },
      { label: 'Reviews', detail: 'Build confidence' },
      { label: 'SEO', detail: 'Stay discoverable' }
    ],
    servicesPhotoAlt: 'Professional using a tablet in a business environment',
    heroPhotoAlt: 'Entrepreneur working on a laptop in a professional business environment',
    homePhotoAlt: 'Two professionals discussing business operations around a laptop in a restaurant setting',
    aboutPhotoAlt: 'Hospitality professional preparing a customer-facing business space',
    mockupKicker: 'Digital presence', mockupTitle: 'Clarity that moves business forward.', mockupStats: ['FAST / 98', 'LOCAL / CV', 'READY / 24'], browserPath: 'morabezatech.com / digital', systemBrowserKicker: 'LOCAL / DIGITAL', systemBrowserTitle: 'Find. Trust. Connect.', systemBrowserFooter: ['Clarity', 'Reach', 'Contact']
  }
};

export function getVisualCopy(locale: Locale): VisualCopy {
  return visualCopy[locale];
}
