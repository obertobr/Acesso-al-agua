import Languages from "./Languages.js"
import LocalStorageUtil from "./LocalStorageUtil.js"

export default class LanguageUtil {

    static defaultLanguage = Languages.ENGLISH;

    static setDefaultLanguage = () => {
        saveElement(LocalStorageUtil.keyLanguage, defaultLanguage)
    }

    static alterarIdioma = (idioma) => {
        if(!idiomaIgual(idioma)){
            LocalStorageUtil.saveElement(LocalStorageUtil.keyLanguage,idioma)
            // recarregarPagina
        }
    }

    static getCurrentLanguage = () => {
        return LocalStorageUtil.getElementByKey(LocalStorageUtil.keyLanguage) || ""
    }

    idiomaIgual = (idioma) => {
        return idioma == getCurrentLanguage()
    }


}