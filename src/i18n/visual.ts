import type { Locale } from './routes';

export interface VisualCopy {
  systemEyebrow: string;
  systemTitle: string;
  systemIntro: string;
  systemNote: string;
  systemItems: Array<{ label: string; detail: string }>;
  servicesPhotoAlt: string;
  heroPhotoAlt: string;
  aboutPhotoAlt: string;
  contactPhotoAlt: string;
  photoServicesLabel: string;
  photoAboutLabel: string;
  photoContactLabel: string;
  heroTag: string;
  heroCaption: string;
  heroLocation: string;
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
    servicesPhotoAlt: 'Kleurrijke straat in Sal, Cabo Verde, met lokale architectuur en een muurschildering',
    heroPhotoAlt: 'Haven van Mindelo op São Vicente, Cabo Verde, met schepen, kade en Atlantisch ochtendlicht',
    aboutPhotoAlt: 'Luchtbeeld van Praia, Cabo Verde, met stedelijke daken en de Atlantische kust',
    contactPhotoAlt: 'Lokale straat en architectuur in Sal, Cabo Verde',
    photoServicesLabel: 'Sal / lokale context',
    photoAboutLabel: 'Praia / Cabo Verde',
    photoContactLabel: 'Cabo Verde / dichtbij'
    , heroTag: 'Mindelo / Cabo Verde', heroCaption: 'Haven / Atlantisch licht', heroLocation: 'São Vicente, Cabo Verde', mockupKicker: 'Digitale aanwezigheid', mockupTitle: 'Helderheid die bedrijven vooruithelpt.', mockupStats: ['SNEL / 98', 'LOKAAL / CV', 'KLAAR / 24'], browserPath: 'morabezatech.com / digitaal', systemBrowserKicker: 'LOKAAL / DIGITAAL', systemBrowserTitle: 'Vind. Vertrouw. Verbind.', systemBrowserFooter: ['Helderheid', 'Bereik', 'Contact']
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
    servicesPhotoAlt: 'Rua colorida em Sal, Cabo Verde, com arquitetura local e um mural',
    heroPhotoAlt: 'Porto do Mindelo em São Vicente, Cabo Verde, com barcos, cais e luz atlântica',
    aboutPhotoAlt: 'Vista aérea da Praia, Cabo Verde, com telhados urbanos e a costa atlântica',
    contactPhotoAlt: 'Rua e arquitetura local em Sal, Cabo Verde',
    photoServicesLabel: 'Sal / contexto local',
    photoAboutLabel: 'Praia / Cabo Verde',
    photoContactLabel: 'Cabo Verde / próximo'
    , heroTag: 'Mindelo / Cabo Verde', heroCaption: 'Porto / luz atlântica', heroLocation: 'São Vicente, Cabo Verde', mockupKicker: 'Presença digital', mockupTitle: 'Clareza que faz o negócio avançar.', mockupStats: ['RÁPIDO / 98', 'LOCAL / CV', 'PRONTO / 24'], browserPath: 'morabezatech.com / digital', systemBrowserKicker: 'LOCAL / DIGITAL', systemBrowserTitle: 'Encontre. Confie. Contacte.', systemBrowserFooter: ['Clareza', 'Alcance', 'Contacto']
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
    servicesPhotoAlt: 'Colourful street in Sal, Cabo Verde, with local architecture and a mural',
    heroPhotoAlt: 'Mindelo harbour in São Vicente, Cabo Verde, with ships, seawall and Atlantic morning light',
    aboutPhotoAlt: 'Aerial view of Praia, Cabo Verde, with urban rooftops and the Atlantic coast',
    contactPhotoAlt: 'Local street and architecture in Sal, Cabo Verde',
    photoServicesLabel: 'Sal / local context',
    photoAboutLabel: 'Praia / Cabo Verde',
    photoContactLabel: 'Cabo Verde / close by'
    , heroTag: 'Mindelo / Cabo Verde', heroCaption: 'Harbour / Atlantic light', heroLocation: 'São Vicente, Cabo Verde', mockupKicker: 'Digital presence', mockupTitle: 'Clarity that moves business forward.', mockupStats: ['FAST / 98', 'LOCAL / CV', 'READY / 24'], browserPath: 'morabezatech.com / digital', systemBrowserKicker: 'LOCAL / DIGITAL', systemBrowserTitle: 'Find. Trust. Connect.', systemBrowserFooter: ['Clarity', 'Reach', 'Contact']
  }
};

export function getVisualCopy(locale: Locale): VisualCopy {
  return visualCopy[locale];
}
