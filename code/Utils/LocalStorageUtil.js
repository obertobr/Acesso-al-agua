export default class LocalStorageUtil {

    static keyLanguage = "LANGUAGE";
    static keyPage = "PAGE"

    static getElementByKey = (key) => {
       return JSON.parse(localStorage.getItem(key))
    }

    static saveElement = (key,element) => {
        localStorage.setItem(key,JSON.stringify(element))
    }
}