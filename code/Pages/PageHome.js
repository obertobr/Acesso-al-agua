import ApiUtil from "../Utils/ApiUtil.js";
import JsonUtil from "../Utils/JsonUtil.js";
import LanguageUtil from "../Utils/LanguageUtil.js";
import Languages from "../Utils/Languages.js";
import PageUtil from "../Utils/PageUtil.js";
import Pages from "../Utils/Pages.js";

export default class PageHome {

    static getPage = async (idioma) => {
        const textos = await JsonUtil.convertFileJsonByName("pageHome");
        
        const div = document.createElement('div')
        const header = document.createElement('header');

        const videoContainer = document.createElement('div');
        videoContainer.id = 'video-container';

        const video = document.createElement('video');
        video.autoplay = true;
        video.muted = true;
        video.loop = true;
        video.id = 'bg-video';

        const source = document.createElement('source');
        source.src = 'assets/video/background.mp4';
        source.type = 'video/mp4';
        video.appendChild(source);

        videoContainer.appendChild(video);

        const nav = document.createElement('nav');

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

        const navDiv = document.createElement('div');
        navDiv.id = 'nav';

        const homeLink = document.createElement('a');
        homeLink.textContent = textos[idioma].navHome;

        const aboutUsLink = document.createElement('a');
        aboutUsLink.textContent = textos[idioma].navSobreNos;
        aboutUsLink.addEventListener("click", () => {
            PageUtil.carregarPagina(LanguageUtil.getCurrentLanguage(),Pages.SOBRE_NOS)
        })

        const criarPostsLink = document.createElement('a');
        criarPostsLink.textContent = textos[idioma].navCriarPost;
        criarPostsLink.addEventListener("click", () => {
            PageUtil.carregarPagina(LanguageUtil.getCurrentLanguage(),Pages.CRIAR_POST)
        })

        navDiv.appendChild(homeLink);
        navDiv.appendChild(aboutUsLink);
        navDiv.appendChild(criarPostsLink);

        nav.appendChild(select);
        nav.appendChild(navDiv);

        const titleDiv = document.createElement('div');
        titleDiv.id = 'title';

        const textsDiv = document.createElement('div');
        textsDiv.id = 'texts';

        const h1 = document.createElement('h1');
        h1.textContent = textos[idioma].titulo;

        const p = document.createElement('p');
        p.textContent = textos[idioma].subtitulo;

        textsDiv.appendChild(h1);
        textsDiv.appendChild(p);

        const searchDiv = document.createElement('div');
        searchDiv.id = 'search';

        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = textos[idioma].placeHolderSearch;

        const button = document.createElement('button');
        button.addEventListener("click", () => {
            this.updatePageContent(idioma, input.value);
        })

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svg.setAttribute('height', '16px');
        svg.setAttribute('viewBox', '0 -960 960 960');
        svg.setAttribute('width', '24px');
        svg.setAttribute('fill', '#000');

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z');
        svg.appendChild(path);

        button.appendChild(svg);

        searchDiv.appendChild(input);
        searchDiv.appendChild(button);

        titleDiv.appendChild(textsDiv);
        titleDiv.appendChild(searchDiv);

        header.appendChild(videoContainer);
        header.appendChild(nav);
        header.appendChild(titleDiv);

        div.appendChild(header)
        div.appendChild(await this.createPageContent(idioma))

        return div;
    }

    static createPageContent = async (idioma) => {
        const posts = await ApiUtil.getPosts(idioma,"");

        const main = document.createElement('main');
    
        posts.forEach((data, index) => {
            const article = document.createElement('article');
    
            const img = document.createElement('img');
            img.src = data.img;
            img.alt = '';
    
            const textsArticle = document.createElement('div');
            textsArticle.className = 'textsArticle';
    
            const textsArticleHeader = document.createElement('div');
            textsArticleHeader.className = 'textsArticleHeader';
    
            const h3 = document.createElement('h3');
            h3.textContent = data.headerText;
    
            const dateP = document.createElement('p');
            dateP.textContent = data.dateText;
    
            textsArticleHeader.appendChild(h3);
            textsArticleHeader.appendChild(dateP);
    
            const bodyP = document.createElement('p');
            bodyP.textContent = data.bodyText.replace(/<[^>]*>/g, '');
    
            textsArticle.appendChild(textsArticleHeader);
            textsArticle.appendChild(bodyP);
    
            article.appendChild(img);
            article.appendChild(textsArticle);

            article.addEventListener("click", () => {
                PageUtil.carregarPost(LanguageUtil.getCurrentLanguage(),Pages.POST, data.id)
            })
    
            main.appendChild(article);
        });
    
    
        const footer = document.createElement('footer');
        footer.textContent = '2024 - Copyright';
    
        const div = document.createElement('div')
        div.appendChild(main)
        div.appendChild(footer)

        return div
    }

    static updatePageContent = async (idioma, search) => {
        const posts = await ApiUtil.getPosts(idioma, search);

        const main = document.createElement('main');
    
        posts.forEach((data, index) => {
            const article = document.createElement('article');
    
            const img = document.createElement('img');
            img.src = data.img;
            img.alt = '';
    
            const textsArticle = document.createElement('div');
            textsArticle.className = 'textsArticle';
    
            const textsArticleHeader = document.createElement('div');
            textsArticleHeader.className = 'textsArticleHeader';
    
            const h3 = document.createElement('h3');
            h3.textContent = data.headerText;
    
            const dateP = document.createElement('p');
            dateP.textContent = data.dateText;
    
            textsArticleHeader.appendChild(h3);
            textsArticleHeader.appendChild(dateP);
    
            const bodyP = document.createElement('p');
            bodyP.textContent = data.bodyText.replace(/<[^>]*>/g, '');
    
            textsArticle.appendChild(textsArticleHeader);
            textsArticle.appendChild(bodyP);
    
            article.appendChild(img);
            article.appendChild(textsArticle);

            article.addEventListener("click", () => {
                PageUtil.carregarPost(LanguageUtil.getCurrentLanguage(),Pages.POST, data.id)
            })
    
            main.appendChild(article);
        });

        const content = document.querySelector("main");
        content.innerText = "";
        content.appendChild(main)
    }

}