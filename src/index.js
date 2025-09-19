import { pageLoad } from './page-load.js';
import { homePage } from './home.js';
import { menuPage } from './menu.js';
import { contactPage } from './contact.js';

const content = document.querySelector('#content');

console.log("Hello webpack!");

pageLoad();

const homeBtn = document.querySelector('#home-button');
const menuBtn = document.querySelector('#menu-button');
const contactBtn = document.querySelector('#contact-button');

homeBtn.addEventListener('click', () => {
    content.innerHTML = "";
    const container = homePage();
    content.appendChild(container);
});

menuBtn.addEventListener('click', () => {
    content.innerHTML = "";
    const container = menuPage();
    content.appendChild(container);
});

contactBtn.addEventListener('click', () => {
    content.innerHTML = "";
    const container = contactPage();
    content.appendChild(container);
});

