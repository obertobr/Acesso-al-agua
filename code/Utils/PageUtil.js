import PageController from "../Pages/PageController.js";
import LocalStorageUtil from "./LocalStorageUtil.js";
import Pages from "./Pages.js";

export default class PageUtil {

    static defaultPage = Pages.HOME

    static setDefaultLanguage = () => {
        saveElement(LocalStorageUtil.keyPage, this.defaultPage)
    }

    static getCurrentPage = () => {
        return LocalStorageUtil.getElementByKey(LocalStorageUtil.keyPage) || ""
    }

    static carregarPagina = (idioma,page) => {
        if(!paginaIgual(page)){
            document.body.innerHTML = ""
            document.body.appendChild(PageController[page].getPage(idioma))
        }
    }

    static carregarPaginaComCurrentPage = (idioma) => {
        this.carregarPagina(idioma, this.getCurrentPage())
    }

    paginaIgual = (page) => {
        return page == getCurrentPage()
    }
}