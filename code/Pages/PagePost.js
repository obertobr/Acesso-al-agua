import JsonUtil from "../Utils/JsonUtil.js";
import LanguageUtil from "../Utils/LanguageUtil.js";
import LocalStorageUtil from "../Utils/LocalStorageUtil.js";
import Languages from "../Utils/Languages.js";
import PageUtil from "../Utils/PageUtil.js";
import Pages from "../Utils/Pages.js";

export default class PagePost {
    static getPage = async (idioma) => {
        const textos = await JsonUtil.convertFileJsonByName("pageHome");
        const postId = LocalStorageUtil.getElementByKey(LocalStorageUtil.keyPost);
        if(postId == undefined){
            PageUtil.carregarPagina(LanguageUtil.getCurrentLanguage(),Pages.HOME)
        }

        const posts = await JsonUtil.convertFileJsonByName("posts");
        const post = posts[postId]

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

        const criarPostsLink = document.createElement('a');
        criarPostsLink.textContent = textos[idioma].navCriarPost;
        criarPostsLink.addEventListener("click", () => {
            PageUtil.carregarPagina(LanguageUtil.getCurrentLanguage(),Pages.CRIAR_POST)
        })

        navLinksDiv.appendChild(homeLink);
        navLinksDiv.appendChild(aboutLink);
        navLinksDiv.appendChild(criarPostsLink);

        nav.appendChild(navLinksDiv);

        div.appendChild(nav);

        const postContainer = document.createElement('div');
        postContainer.id = 'postContainer';

        const postDiv = document.createElement('div');
        const img = document.createElement('img');
        img.src = post.imgSrc;
        const h1 = document.createElement('h1');
        h1.textContent = post[idioma].headerText;

        postDiv.appendChild(img);
        postDiv.appendChild(h1);

        postContainer.appendChild(postDiv);

        const range = document.createRange();
        const fragment = range.createContextualFragment(post[idioma].bodyText);
        postContainer.appendChild(fragment);

        div.appendChild(postContainer);

        const footer = document.createElement('footer');
        footer.textContent = '2024 - Copyright';
        div.appendChild(footer);

        return div;
    }
}