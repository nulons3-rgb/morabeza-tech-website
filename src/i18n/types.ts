import type { Locale, PageKey } from './routes';

export interface ServiceCopy {
  number: string;
  title: string;
  short: string;
  detail: string;
  items: string[];
  tone: 'blue' | 'cyan' | 'gold' | 'violet';
}

export interface PackageCopy {
  name: string;
  description: string;
  fit: string;
  featured: boolean;
}

export interface Translation {
  locale: Locale;
  localeLabel: string;
  tagline: string;
  nav: Record<Exclude<PageKey, 'privacy' | 'cookies'>, string>;
  footer: {
    navigation: string;
    services: string;
    servicesList: Array<{ label: string; id: string }>;
    contact: string;
    privacy: string;
    cookies: string;
    rights: string;
  };
  common: {
    analysisCta: string;
    viewWork: string;
    viewServices: string;
    viewPackages: string;
    learnMore: string;
    startProject: string;
    contactUs: string;
    mostChosen: string;
    languageSelector: string;
    menuOpen: string;
    menuClose: string;
    next: string;
    backHome: string;
    conceptNote: string;
    location: string;
    email: string;
  };
  home: {
    eyebrow: string;
    title: string;
    intro: string;
    supportingLine: string[];
    positioningEyebrow: string;
    positioningTitle: string;
    positioningIntro: string;
    principles: Array<{ number: string; title: string; copy: string }>;
    servicesEyebrow: string;
    servicesTitle: string;
    servicesIntro: string;
    processEyebrow: string;
    processTitle: string;
    processIntro: string;
    process: Array<{ number: string; title: string; copy: string }>;
    analysisEyebrow: string;
    analysisTitle: string;
    analysisIntro: string;
    analysisStatus: string;
    analysisNote: string;
    analysisItems: string[];
    packagesEyebrow: string;
    packagesTitle: string;
    packagesIntro: string;
    monthlySupport: string;
    aboutEyebrow: string;
    aboutTitle: string;
    aboutIntro: string;
    aboutMark: string;
    aboutLocation: string;
    mockupEyebrow: string;
    mockupValue: string;
    finalEyebrow: string;
    finalTitle: string;
    finalIntro: string;
  };
  servicesPage: {
    eyebrow: string;
    title: string;
    intro: string;
    sectionEyebrow: string;
    sectionTitle: string;
    sectionIntro: string;
    services: ServiceCopy[];
  };
  packagesPage: {
    eyebrow: string;
    title: string;
    intro: string;
    sectionEyebrow: string;
    sectionTitle: string;
    sectionIntro: string;
    packages: PackageCopy[];
    consultationTitle: string;
    consultationIntro: string;
    consultationCta: string;
    monthlySupport: string;
    faqEyebrow: string;
    faqTitle: string;
    faqIntro: string;
    faq: Array<{ question: string; answer: string }>;
  };
  aboutPage: {
    eyebrow: string;
    title: string;
    intro: string;
    missionEyebrow: string;
    missionTitle: string;
    missionParagraphs: string[];
    rows: Array<{ label: string; title: string; copy: string }>;
    positionEyebrow: string;
    positionTitle: string;
    positionIntro: string;
    mark: string;
    location: string;
    positionCta: string;
  };
  contactPage: {
    eyebrow: string;
    title: string;
    intro: string;
    sectionEyebrow: string;
    sectionTitle: string;
    sectionIntro: string;
    analysisLabel: string;
    freeLabel: string;
    form: {
      name: string;
      company: string;
      email: string;
      phone: string;
      subject: string;
      budget: string;
      message: string;
      messagePlaceholder: string;
      subjectPlaceholder: string;
      budgetPlaceholder: string;
      subjects: string[];
      budgets: string[];
      consent: string;
      submit: string;
      loading: string;
      fallback: string;
      success: string;
      failure: string;
      required: string;
      invalidEmail: string;
    };
  };
  legal: {
    privacyTitle: string;
    privacyIntro: string;
    privacyEyebrow: string;
    privacyHeading: string;
    privacyParagraphs: string[];
    cookiesTitle: string;
    cookiesIntro: string;
    cookiesEyebrow: string;
    cookiesHeading: string;
    cookiesParagraphs: string[];
  };
}
