
import './styles.css';
import './change-theme';
import menu from './menu.json';
import itemsTemplate from './templates/menu-template.hbs';

const menuNode = document.querySelector('.js-menu');

const markup = itemsTemplate(menu);
menuNode.innerHTML = markup;

