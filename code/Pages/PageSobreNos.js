import JsonUtil from "../Utils/JsonUtil.js";
import LanguageUtil from "../Utils/LanguageUtil.js";
import PageUtil from "../Utils/PageUtil.js";
import Pages from "../Utils/Pages.js";

export default class PageSobreNos {

    static getPage = async (idioma) => {
        const textos = await JsonUtil.convertFileJsonByName("pageSobreNos");
        const aboutUsContainer = document.createElement('div');
        aboutUsContainer.id = 'aboutUsContainer';

        const aboutUsDiv = document.createElement('div');
        aboutUsDiv.id = 'aboutUs';
    
        const title = document.createElement('h2');
        title.textContent = textos[idioma].titulo;
        aboutUsDiv.appendChild(title);
    
        const description = document.createElement('p');
        description.textContent = textos[idioma].descricao;
        aboutUsDiv.appendChild(description);
    
        const members = textos[idioma].integrantes
        const membersList = document.createElement('ul');
        
        members.forEach(member => {
            const listItem = document.createElement('li');
            listItem.textContent = member;
            membersList.appendChild(listItem);
        });
        aboutUsDiv.appendChild(membersList);
    
        const backButton = document.createElement('button');
        backButton.textContent = textos[idioma].botaoVoltar
        
        backButton.addEventListener("click", () => {
            PageUtil.carregarPagina(LanguageUtil.getCurrentLanguage(),Pages.HOME)
        })

        aboutUsDiv.appendChild(backButton);
    
        aboutUsContainer.appendChild(aboutUsDiv);
     
         return aboutUsContainer
    }
    

}