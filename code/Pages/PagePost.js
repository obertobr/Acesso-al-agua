export default class PagePost {
    static getPage = async (idioma) => {
        // Cria o elemento div principal
        const div = document.createElement('div');

        // Cria o elemento nav e define o id
        const nav = document.createElement('nav');
        nav.id = 'postNav';

        // Cria o elemento select e adiciona opções
        const select = document.createElement('select');
        const option1 = document.createElement('option');
        option1.value = 'portugues';
        option1.textContent = 'Português';
        const option2 = document.createElement('option');
        option2.value = 'english';
        option2.textContent = 'English';
        const option3 = document.createElement('option');
        option3.value = 'espanol';
        option3.textContent = 'Español';

        select.appendChild(option1);
        select.appendChild(option2);
        select.appendChild(option3);

        // Adiciona o select ao nav
        nav.appendChild(select);

        // Cria o div para os links de navegação e adiciona os links
        const navLinksDiv = document.createElement('div');
        navLinksDiv.id = 'nav';
        const homeLink = document.createElement('a');
        homeLink.href = '#';
        homeLink.textContent = 'Home';
        const aboutLink = document.createElement('a');
        aboutLink.href = '#';
        aboutLink.textContent = 'Sobre Nós';

        navLinksDiv.appendChild(homeLink);
        navLinksDiv.appendChild(aboutLink);

        // Adiciona o div de navegação ao nav
        nav.appendChild(navLinksDiv);

        // Adiciona o nav ao div principal
        div.appendChild(nav);

        // Cria o container para os posts
        const postContainer = document.createElement('div');
        postContainer.id = 'postContainer';

        // Cria o elemento para o post com a imagem e o título
        const postDiv = document.createElement('div');
        const img = document.createElement('img');
        img.src = 'assets/img/torneira.jpg';
        const h1 = document.createElement('h1');
        h1.textContent = 'Desafios e Soluções para o Acesso à Água no Brasil e no Chile';

        postDiv.appendChild(img);
        postDiv.appendChild(h1);

        // Adiciona o postDiv ao postContainer
        postContainer.appendChild(postDiv);

        // Adiciona o parágrafo com o conteúdo do post
        const p = document.createElement('p');
        p.textContent = 'A água é essencial para a vida e o desenvolvimento das sociedades. No entanto, o acesso à água de qualidade ainda é um desafio tanto no Brasil quanto no Chile. Neste post, vamos explorar os principais desafios enfrentados por esses países e algumas das soluções que estão sendo implementadas para garantir que mais pessoas tenham acesso a esse recurso vital.';
        postContainer.appendChild(p);

        // Adiciona o subtítulo
        const h4 = document.createElement('h4');
        h4.textContent = 'Desafios no Brasil';
        postContainer.appendChild(h4);

        // Adiciona o postContainer ao div principal
        div.appendChild(postContainer);

        // Cria e adiciona o footer
        const footer = document.createElement('footer');
        footer.textContent = '2024 - Copyright';
        div.appendChild(footer);

        return div;
    }
}