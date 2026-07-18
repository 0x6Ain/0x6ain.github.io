import ko from './ko';
import en from './en';
import ja from './ja';
import zhCN from './zh-CN';
import zhTW from './zh-TW';
import es from './es';
import fr from './fr';
import de from './de';
import pt from './pt';
import ru from './ru';
import it from './it';
import ar from './ar';
import hi from './hi';
import vi from './vi';
import th from './th';
import id from './id';
import tr from './tr';
import nl from './nl';
import pl from './pl';
import sv from './sv';
import type { SiteContent } from './types';

export const languages = {
  ko: '한국어',
  en: 'English',
  ja: '日本語',
  'zh-CN': '简体中文',
  'zh-TW': '繁體中文',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  pt: 'Português',
  ru: 'Русский',
  it: 'Italiano',
  ar: 'العربية',
  hi: 'हिन्दी',
  vi: 'Tiếng Việt',
  th: 'ไทย',
  id: 'Bahasa Indonesia',
  tr: 'Türkçe',
  nl: 'Nederlands',
  pl: 'Polski',
  sv: 'Svenska',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'ko';

export const rtlLangs: ReadonlySet<Lang> = new Set(['ar']);

export function dirForLang(lang: Lang): 'rtl' | 'ltr' {
  return rtlLangs.has(lang) ? 'rtl' : 'ltr';
}

export const content: Record<Lang, SiteContent> = {
  ko,
  en,
  ja,
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  es,
  fr,
  de,
  pt,
  ru,
  it,
  ar,
  hi,
  vi,
  th,
  id,
  tr,
  nl,
  pl,
  sv,
};

const langList = Object.keys(languages) as Lang[];

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if ((langList as string[]).includes(maybeLang)) return maybeLang as Lang;
  return defaultLang;
}

export function pathForLang(lang: Lang): string {
  return `/${lang}/`;
}

/**
 * Matches a list of browser-preferred language tags (navigator.languages,
 * most-preferred first) against the supported locales. Tries an exact
 * case-insensitive match first, then falls back to the base subtag (e.g.
 * "zh" -> "zh-CN", "en-AU" -> "en") before giving up to defaultLang.
 */
export function matchBrowserLangs(browserLangs: readonly string[]): Lang {
  const lower = langList.map((l) => l.toLowerCase());

  for (const raw of browserLangs) {
    const tag = raw.toLowerCase();
    const exact = lower.indexOf(tag);
    if (exact !== -1) return langList[exact];
  }

  for (const raw of browserLangs) {
    const base = raw.toLowerCase().split('-')[0];
    const match = lower.findIndex((l) => l.split('-')[0] === base);
    if (match !== -1) return langList[match];
  }

  return defaultLang;
}
