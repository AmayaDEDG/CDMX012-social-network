/* eslint-disable import/no-cycle */
//  Routing
import { home } from './components/home.js';
import { registration } from './components/registration.js';
import { mainPage } from './components/mainPage.js';

//  Routing
export const routes = {
  '/CDMX012-social-network/src/': home,
  '/CDMX012-social-network/src/registration': registration,
  '/CDMX012-social-network/src/mainPage': mainPage,
};

// const root = document.getElementById('root');
window.onload = () => {
  const root = document.getElementById('root');
  root.appendChild(routes[window.location.pathname]());
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  const root = document.getElementById('root');
  if (root.hasChildNodes()) {
    root.innerHTML = '';
  }
  root.appendChild(routes[pathname]());
};

window.onpopstate = () => {
  const root = document.getElementById('root');
  root.innerHTML = '';
  root.appendChild(routes[window.location.pathname]());
};

window.addEventListener('click', function (e) {
  this.console.log(e.target);
});
