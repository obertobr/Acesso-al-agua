import Languages from "./Languages.js"
import LocalStorageUtil from "./LocalStorageUtil.js"
import PageUtil from "./PageUtil.js";

export default class LanguageUtil {

    static defaultLanguage = Languages.PORTUGUES;

    static setDefaultLanguage = () => {
        if(!LocalStorageUtil.getElementByKey(LocalStorageUtil.keyLanguage))
            LocalStorageUtil.saveElement(LocalStorageUtil.keyLanguage, this.defaultLanguage)
    }

    static alterarIdioma = async (idioma) => {
        if(!this.idiomaIgual(idioma)){
            LocalStorageUtil.saveElement(LocalStorageUtil.keyLanguage,idioma)
            await PageUtil.carregarPaginaComCurrentPage(idioma)
        }
    }

    static getCurrentLanguage = () => {
        return LocalStorageUtil.getElementByKey(LocalStorageUtil.keyLanguage) || ""
    }

    static idiomaIgual = (idioma) => {
        return idioma == this.getCurrentLanguage()
    }


}