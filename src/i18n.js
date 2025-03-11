import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import TranslationTypes from "./types/translationTypes";

const files = ["common", "homepage"];

const resources = {};
Object.entries(TranslationTypes).forEach(([lang,language]) => {
  resources[lang] = {}; // Initialize language namespace

  files.forEach((file) => {
    import(`./locales/${lang}/${file}.json`)
      .then((module) => {
        resources[lang][file] = module.default;
      })
      .catch((error) => {
        console.error(`Error loading ${file}.json for language: ${language}`, error);
      });
  });
});

i18n
  .use(initReactI18next)
  .use(LanguageDetector) // Detect user's language
  .init({
    resources,
    fallbackLng: "en", // Default language
    detection: {
      order: ["localStorage", "cookie", "sessionStorage"], // Detect language from browser, storage, or cookies
      caches: ["localStorage", "cookie"]
    },
    interpolation: {
      escapeValue: false // React already protects from XSS
    }
  });

export default i18n;