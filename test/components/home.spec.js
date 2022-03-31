/**
 * @jest-environment jsdom
 */
import firebase from '../../src/lib/__mocks__/firebaseApp.js';
import { home } from '../../src/components/home.js';
import { signInEmailAndPW } from '../../src/lib/firebaseApp';

const component = home();
document.body.innerHTML = '<div id="root"></div>';
const rootDiv = document.getElementById('root');
function reloadHome() {
  window.location.pathname = '/'; // esto ni cosquillas hace
  rootDiv.innerHTML = '';
  rootDiv.appendChild(component);
}

describe('home', () => {
  it('Snapshot home', () => {
    reloadHome();
    expect(rootDiv.innerHTML).toMatchSnapshot('./home.spec.js.snap');
  });
  it('onNavigate works', () => {
    expect(window.location.pathname).toBe('/');
  });
  it('shows psw when click on btn', () => {
    const seePWBtn = document.getElementById('seePasswordHome');
    const loginPW = document.getElementById('loginPassword');
    seePWBtn.click();
    expect(loginPW.type).toBe('text');
    seePWBtn.click();
    expect(loginPW.type).toBe('password');
  });
  it('asks me for my mail and password, and tells me what info goes where', () => {
    const inputMail = document.getElementById('user');
    const inputPsw = document.getElementById('loginPassword');
    const mailPlaceholder = inputMail.placeholder;
    const pswPlaceholder = inputPsw.placeholder;
    expect(mailPlaceholder).toBe('E-mail');
    expect(pswPlaceholder).toBe('Contraseña');
  });
  it('tells me if my information is wrong', async () => { // cómo puedo acceder a los mensajes de error
    const loginSubmit = document.getElementById('submitButton');
    // const loginMessage = document.getElementById('loginMessage');
    loginSubmit.click();
    const firebaseAsync = firebase.auth().signInWithEmailAndPassword(false);
    await expect(firebaseAsync).rejects.toBe('El correo o la contraseña es incorrecta');
  });
  it('goes to mainpage when successfully logged in', () => {
    expect(window.location.pathname).toBe('/');
    const loginSubmit = document.getElementById('submitButton');
    loginSubmit.click();
    expect(signInEmailAndPW).toHaveBeenCalled();
    // await firebase.auth().signInWithEmailAndPassword(true);
    // expect(window.location.pathname).toBe('/mainPages');
  });
  it('changes route when click on button', () => { // cómo puedo regresar a '/'
    // reloadHome();
    expect(window.location.pathname).toBe('/j');
    const registerBtn = document.getElementById('registerButton');
    registerBtn.click();
    expect(window.location.pathname).toBe('/registration');
  });
  /* it('calls google when click on logo', () => {
    const gmailLogo = document.getElementById('gmailLogo');
    gmailLogo.click();
    expect(signInWithGoogle()).toHaveBeenCalled();
  });
  it('calls google when click on facebooklogo', () => {
    const facebookLogo = document.getElementById('facebookLogo');
    facebookLogo.click();
    expect(signInWithFacebook()).toHaveBeenCalled();
  }); */
});
