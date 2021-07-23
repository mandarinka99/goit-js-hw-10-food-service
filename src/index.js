
import './styles.css';
import menu from './menu.json';
import itemsTemplate from './templates/menu-template.hbs';

const inputNode = document.querySelector('#theme-switch-toggle');

document.body.classList.add('light-theme');

inputNode.addEventListener('change', () => {
document.body.classList.toggle('dark-theme');
document.body.classList.toggle('light-theme');
});


const menuNode = document.querySelector('.js-menu');
console.log(menuNode);

const markup = itemsTemplate(menu);
menuNode.innerHTML = markup;

