import {cardSidebarData} from "./generate-data.js";

const cardGrid = document.getElementById('cards-sidevar');

const createComponent = () => {
    const element = document.createElement('article');
    element.classList = 'card-video in-sidebar';

    const data = cardSidebarData();
    const card = (data) => `
    <a href="#" class="cover"> <img src=${data.cover} alt="Imagen del video" class="image">
    <time class="time">45:21</time>
    </a>
    <div class="content">
        <h3 class="title rows-text-2"> <a href="#">${data.title}</a></h3>
        <a href="#">${data.name}</a>
        <p class="video-information">
            <span class="views">${data.views} visualizaciones</span>
            <span>${data.date}</span>
        </p>
    </div>`;
    element.innerHTML = card(data);

    cardGrid.appendChild(element);
}

for (let i = 0; i < 14; i++) {
    createComponent();
}