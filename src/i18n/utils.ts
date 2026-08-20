import { en } from './en';
import { nl } from './nl';
import { pt } from './pt';
import type { Locale } from './routes';
import type { PageKey } from './routes';
import type { Translation } from './types';
import { company } from '../data/site';

export const translations: Record<Locale, Translation> = { nl, pt, en };

export function getTranslation(locale: Locale): Translation {
  return translations[locale];
}

export function getSeo(copy: Translation, page: PageKey): { title: string; description: string } {
  if (page === 'home') return { title: `${company.name} — ${copy.tagline}`, description: copy.home.intro };
  if (page === 'services') return { title: `${copy.nav.services} — ${company.name}`, description: copy.servicesPage.intro };
  if (page === 'packages') return { title: `${copy.nav.packages} — ${company.name}`, description: copy.packagesPage.intro };
  if (page === 'about') return { title: `${copy.nav.about} — ${company.name}`, description: copy.aboutPage.intro };
  if (page === 'portfolio') return { title: `${copy.nav.portfolio} — ${company.name}`, description: copy.portfolioPage.intro };
  if (page === 'contact') return { title: `${copy.nav.contact} — ${company.name}`, description: copy.contactPage.intro };
  if (page === 'privacy') return { title: `${copy.legal.privacyTitle} — ${company.name}`, description: copy.legal.privacyIntro };
  return { title: `${copy.legal.cookiesTitle} — ${company.name}`, description: copy.legal.cookiesIntro };
}
