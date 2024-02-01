import type { NextConfig } from "next";

export const defaultLocale = "en";
export const locales = ["en", "nl"] as const;

export const i18n: NonNullable<NextConfig["i18n"]> = {
  defaultLocale,
  locales: [...locales],
} as const;

export type Locale = (typeof locales)[number];
