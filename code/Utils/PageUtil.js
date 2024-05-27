import PageController from "../Pages/PageController.js";
import LocalStorageUtil from "./LocalStorageUtil.js";
import Pages from "./Pages.js";

export default class PageUtil {

    static defaultPage = Pages.HOME

    static setDefaultPage = () => {
        if(!LocalStorageUtil.getElementByKey(LocalStorageUtil.keyPage))
            LocalStorageUtil.saveElement(LocalStorageUtil.keyPage, this.defaultPage)
    }

    static getCurrentPage = () => {
        return LocalStorageUtil.getElementByKey(LocalStorageUtil.keyPage) || ""
    }

    static carregarPagina = async (idioma,page) => {
        document.body.innerHTML = ""
        const pageHTML = await PageController[page].getPage(idioma)
        LocalStorageUtil.saveElement(LocalStorageUtil.keyPage, page)
        document.body.appendChild(pageHTML)
    }

    static carregarPaginaComCurrentPage = async (idioma) => {
       await this.carregarPagina(idioma, this.getCurrentPage())
    }

    static paginaIgual = (page) => {
        return page == this.getCurrentPage()
    }
}