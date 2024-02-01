import { Locale } from "@/i18n.config";

const dictionaries = {
  en: () => import(`@/dictionaries/en.json`).then((m) => m.default),
  nl: () => import(`@/dictionaries/nl.json`).then((m) => m.default),
} as const;

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
