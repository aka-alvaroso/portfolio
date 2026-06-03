import { en } from './en';
import { es } from './es';

export type Locale = 'en' | 'es';

const translations = { en, es } as const;

export function useTranslations(lang: Locale) {
  return translations[lang];
}
