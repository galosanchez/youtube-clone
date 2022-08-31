import {cardData} from "./generate-data.js";

const cardGrid = document.getElementById('card-grid');

const createComponent = () => {
    const element = document.createElement('article');
    element.classList.add('card-video');

    const data = cardData();
    const card = (data) => `
    <a href="/video.html" class="cover">
    <img src=${data.cover}
    alt="Portada del video" class="image">
    <time class="time">${data.time}</time>
    </a>
    <div class="container flex">
    <div class="user-photo">
        <img src=${data.avatar} class="image" alt="Foto de perfil">
    </div>
    <div class="content">
        <h3 class="title rows-text-2"><a href="/video.html">${data.title}</a></h3>
        <p>${data.name}</p>
        <p class="video-information">
            <span class="views">${data.views} visualizaciones</span>
            <span>${data.date}</span>
        </p>
    </div>
    </div>`;
    element.innerHTML = card(data);

    cardGrid.appendChild(element);
}

for (let i = 0; i < 24; i++) {
    createComponent();
}