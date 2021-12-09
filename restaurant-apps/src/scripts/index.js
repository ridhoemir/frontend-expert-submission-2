import 'regenerator-runtime';
/* for async await transpile */
import '@fortawesome/fontawesome-free/js/all';
import '../styles/main.css';
import App from './view/app';
import meal from './component/menu-item';
import swRegister from './utils/sw-register';

document.addEventListener('DOMContentLoaded', () => {
  meal();
  const skipToContent = document.querySelector('.skip-link');
  skipToContent.addEventListener('click', (event) => {
    event.preventDefault();
    const mainContent = document.querySelector('main');
    mainContent.focus();
  });
});

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
