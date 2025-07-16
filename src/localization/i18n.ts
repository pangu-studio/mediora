import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        appName: "Mediora",
        titleHomePage: "Home Page",
        titleSecondPage: "Second Page",
      },
    },
    "zh-CN": {
      translation: {
        appName: "Mediora",
        titleHomePage: "首页",
        titleSecondPage: "第二页",
      },
    },
    "pt-BR": {
      translation: {
        appName: "Mediora",
        titleHomePage: "Página Inicial",
        titleSecondPage: "Segunda Página",
      },
    },
  },
});
