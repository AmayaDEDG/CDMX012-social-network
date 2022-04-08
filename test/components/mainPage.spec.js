/**
 * @jest-environment jsdom
 */
// eslint-disable-next-line no-unused-vars
import firebase from '../../src/lib/__mocks__/firebase-Auth.js';
import { mainPage } from '../../src/components/mainPage.js';
/* import * as app from '../../src/app.js'; */

const component = mainPage();
document.body.innerHTML = '<div id="root"></div>';
const rootDiv = document.getElementById('root');
function reloadMainPage() {
  window.location.pathname = '/mainPage';
  rootDiv.innerHTML = '';
  rootDiv.appendChild(component);
}

describe('Main page', () => {
  it('Snapshot main page', () => {
    reloadMainPage();
    expect(rootDiv.innerHTML).toMatchSnapshot();
  });
});
