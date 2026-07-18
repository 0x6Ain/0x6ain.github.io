import ko from './ko';
import en from './en';
import type { SiteContent } from './types';

export const languages = {
  ko: '한국어',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'ko';

export const content: Record<Lang, SiteContent> = { ko, en };

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang in languages) return maybeLang as Lang;
  return defaultLang;
}

export function pathForLang(lang: Lang): string {
  return `/${lang}/`;
}
