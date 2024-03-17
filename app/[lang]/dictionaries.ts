//import 'server-only';

export type Locale = keyof typeof dictionaries;

const dictionaries = {
  en: () =>
    import('@/app/[lang]/dictionaries/en.json').then(
      (module) => module.default,
    ),
  uk: () =>
    import('@/app/[lang]/dictionaries/ua.json').then(
      (module) => module.default,
    ),
  ru: () =>
    import('@/app/[lang]/dictionaries/ru.json').then(
      (module) => module.default,
    ),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
