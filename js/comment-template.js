import {commentData} from "./generate-data.js";

const commentGrid = document.getElementById('comments-grid');

const createComponent = () => {
    const element = document.createElement('article');
    element.classList = 'comment flex';

    const data = commentData();
    const card = (data) => `
    <div class="user-photo">
        <img src=${data.avatar} class="image" alt="Foto de perfil">
    </div>
    <div class="content">
        <header class="header">
            <a href="#" class="name">${data.name}</a>
            <time class="time">${data.date}</time>
        </header>
        <p class="text rows-text-3">${data.comment}
        </p>
        <footer class="buttons-container">
            <button class="action-button has-text" data-tooltip="Me gusta">
                <span class="icon icon-like-video"></span>
                <span class="text">${data.likes}</span>
            </button>
            <button class="action-button has-text" data-tooltip="No me gusta">
                <span class="icon icon-dislike-video"></span>
            </button>
            <button class="action-button has-text">
                <span class="text">Responder</span>
            </button>
        </footer>
    </div>`;
    element.innerHTML = card(data);

    commentGrid.appendChild(element);
}

for (let i = 0; i < 5; i++) {
    createComponent();
}