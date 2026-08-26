export type Locale = "en" | "pt" | "es";

export const LOCALES: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "pt", label: "PT" },
  { code: "es", label: "ES" },
];

export const DEFAULT_LOCALE: Locale = "en";
