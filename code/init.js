import LanguageUtil from "./Utils/LanguageUtil.js";
import PageUtil from "./Utils/PageUtil.js";

PageUtil.setDefaultPage()
LanguageUtil.setDefaultLanguage()
await PageUtil.carregarPagina(LanguageUtil.getCurrentLanguage(),PageUtil.getCurrentPage())

