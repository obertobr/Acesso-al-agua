import JsonUtil from "../Utils/JsonUtil.js";
import LanguageUtil from "../Utils/LanguageUtil.js";
import Languages from "../Utils/Languages.js";
import PageUtil from "../Utils/PageUtil.js";
import Pages from "../Utils/Pages.js";

export default class PageCriarPost {
    static getPage = async (idioma) => {
        const textos = await JsonUtil.convertFileJsonByName("pageHome");

        // Cria o elemento div principal
        const div = document.createElement('div');

        // Cria o elemento nav e define o id
        const nav = document.createElement('nav');
        nav.id = 'postNav';

        const select = document.createElement('select');
        select.addEventListener('change', async (event) => {
            await LanguageUtil.alterarIdioma(event.target.value)
        })

        const option1 = document.createElement('option');
        option1.value = Languages.PORTUGUES;
        option1.textContent = 'Português';

        const option2 = document.createElement('option');
        option2.value = Languages.ENGLISH;
        option2.textContent = 'English';

        const option3 = document.createElement('option');
        option3.value = Languages.ESPANHOL;
        option3.textContent = 'Español';

        select.appendChild(option1);
        select.appendChild(option2);
        select.appendChild(option3);

        select.value = LanguageUtil.getCurrentLanguage()

        nav.appendChild(select);

        const navLinksDiv = document.createElement('div');
        navLinksDiv.id = 'nav';

        const homeLink = document.createElement('a');
        homeLink.textContent = textos[idioma].navHome;
        homeLink.addEventListener("click", () => {
            PageUtil.carregarPagina(LanguageUtil.getCurrentLanguage(),Pages.HOME)
        })

        const aboutLink = document.createElement('a');
        aboutLink.textContent = textos[idioma].navSobreNos;
        aboutLink.addEventListener("click", () => {
            PageUtil.carregarPagina(LanguageUtil.getCurrentLanguage(),Pages.SOBRE_NOS)
        })

        navLinksDiv.appendChild(homeLink);
        navLinksDiv.appendChild(aboutLink);

        nav.appendChild(navLinksDiv);

        div.appendChild(nav);

        div.appendChild(await this.getMain(idioma))


        const footer = document.createElement('footer');
        footer.textContent = '2024 - Copyright';
        div.appendChild(footer);

        return div;
    }

    static getMain = async (idioma) => {
        const textos = await JsonUtil.convertFileJsonByName("pageCriarPost");

        const main = document.createElement('main');
        main.id = 'postMain';

        // Cria os grupos de formulário para título e texto
        const createFormGroup = (labelText, inputElement) => {
            const formGroup = document.createElement('div');
            formGroup.classList.add('form-group');

            const label = document.createElement('label');
            label.textContent = labelText;

            formGroup.appendChild(label);
            formGroup.appendChild(inputElement);

            return formGroup;
        };

        // Títulos dos Posts
        const titleInputPt = document.createElement('input');
        titleInputPt.type = 'text';
        titleInputPt.name = 'title_pt';
        titleInputPt.classList.add('post-input');
        main.appendChild(createFormGroup(textos[idioma].titlePT, titleInputPt));

        const titleInputEn = document.createElement('input');
        titleInputEn.type = 'text';
        titleInputEn.name = 'title_en';
        titleInputEn.classList.add('post-input');
        main.appendChild(createFormGroup(textos[idioma].titleEN, titleInputEn));

        const titleInputEs = document.createElement('input');
        titleInputEs.type = 'text';
        titleInputEs.name = 'title_es';
        titleInputEs.classList.add('post-input');
        main.appendChild(createFormGroup(textos[idioma].titleES, titleInputEs));

        // Textos dos Posts
        const textInputPt = document.createElement('textarea');
        textInputPt.name = 'text_pt';
        textInputPt.classList.add('post-textarea');
        main.appendChild(createFormGroup(textos[idioma].textPT, textInputPt));

        const textInputEn = document.createElement('textarea');
        textInputEn.name = 'text_en';
        textInputEn.classList.add('post-textarea');
        main.appendChild(createFormGroup(textos[idioma].textEN, textInputEn));

        const textInputEs = document.createElement('textarea');
        textInputEs.name = 'text_es';
        textInputEs.classList.add('post-textarea');
        main.appendChild(createFormGroup(textos[idioma].textES, textInputEs));

        // URL da Página
        const urlInput = document.createElement('input');
        urlInput.type = 'text';
        urlInput.name = 'url';
        urlInput.classList.add('post-input');
        main.appendChild(createFormGroup(textos[idioma].url, urlInput));

        // Botão de Criar
        const createButton = document.createElement('button');
        createButton.textContent = textos[idioma].button;
        createButton.classList.add('create-button');
        createButton.addEventListener('click', () => {
            // Função de criação do post
            alert('Post criado!');
        });

        main.appendChild(createButton);

        return main;
    }
}