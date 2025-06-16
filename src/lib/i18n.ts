import { writable } from "svelte/store";

export type Lang = "sv" | "en";

const savedLang = localStorage.getItem("locale") as Lang | null;
export const locale = writable<Lang>(savedLang || "sv");

export const t = writable<Record<string, string>>({});

async function loadTranslations(lang: Lang) {
    const translations = await import(`./locales/${lang}.json`);
    t.set(translations.default);
}

locale.subscribe((lang) => {
    loadTranslations(lang);
    localStorage.setItem("locale", lang);
});