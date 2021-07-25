
import './styles.css';
import menu from './menu.json';
import itemsTemplate from './templates/menu-template.hbs';

const inputNode = document.querySelector('#theme-switch-toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

let theme = localStorage.getItem('data-theme');
if (theme === Theme.DARK) {
  document.body.classList.add(Theme.DARK);
  inputNode.checked = true;
} else {
  document.body.classList.add(Theme.LIGHT);
}   

inputNode.addEventListener('change', () => {
  let theme = localStorage.getItem('data-theme');
  if (theme === Theme.LIGHT) {
    localStorage.setItem("data-theme", Theme.DARK)
  } else {
    localStorage.setItem("data-theme", Theme.LIGHT)
  }   
  document.body.classList.toggle(Theme.DARK);
  document.body.classList.toggle(Theme.LIGHT);
});

const menuNode = document.querySelector('.js-menu');
console.log(menuNode);

const markup = itemsTemplate(menu);
menuNode.innerHTML = markup;

