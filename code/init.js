import LanguageUtil from "./Utils/LanguageUtil.js";
import PageUtil from "./Utils/PageUtil.js";

PageUtil.setDefaultPage() // TODO - Verificar se já existe valor, não precisa setar novamente
LanguageUtil.setDefaultLanguage() // TODO -  Verificar se já existe valor, não precisa setar novamente
await PageUtil.carregarPagina(LanguageUtil.getCurrentLanguage(),PageUtil.getCurrentPage())

