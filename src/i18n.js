import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "./locales/en/translation.json";
import cnTranslation from "./locales/cn/translation.json";
import esTranslation from "./locales/es/translation.json";

i18n
  .use(initReactI18next)
  .use(LanguageDetector) // Detect user's language
  .init({
    resources: {
      en: { translation: enTranslation },
      cn: { translation: cnTranslation },
      es: { translation: esTranslation }
    },
    fallbackLng: "en", // Default language
    detection: {
      order: ["navigator", "localStorage", "cookie"], // Detect language from browser, storage, or cookies
      caches: ["localStorage", "cookie"]
    },
    interpolation: {
      escapeValue: false // React already protects from XSS
    }
  });

export default i18n;