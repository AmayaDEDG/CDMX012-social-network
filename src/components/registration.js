/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import { onNavigate } from '../app.js';
import { createAccount, signInWithFacebook, signInWithGoogle } from '../lib/firebase-Auth.js';

export const registration = () => {
  const structureAttributes = {
    class: 'structure',
  };
  const registrationStructureAttributes = {
    class: 'registration-structure',
  };
  const petspaceLogoAttributes = {
    class: 'petspace-logo',
    src: 'img/PetSpaceLogo.png',
  };
  const desktopImgAttributes = {
    class: 'desktop-img',
    src: 'img/homeDesktop.png',
  };
  const formAttributes = {
    id: 'registrationForm',
    action: 'submit',
  };
  const inputNameAttributes = {
    placeholder: 'Nombre',
    id: 'regName',
  };
  const inputEmailAttributes = {
    placeholder: 'Correo electrónico',
    id: 'regEmail',
  };
  const inputPWAttributes = {
    type: 'password',
    placeholder: 'Contraseña',
    id: 'regPW',
  };
  const messageAttributes = {
    id: 'regMessage',
  };
  const buttonRegisterAttributes = {
    class: 'submit-button',
    type: 'button',
    id: 'regBtn',
  };
  const facebookLogoAttributes = {
    src: 'img/facebook.png',
    class: 'facebook-logo',
    id: 'fbLogo',
  };
  const gmailLogoAttributes = {
    src: 'img/google.png',
    class: 'gmail-logo',
    id: 'googleLogo',
  };
  const returnButtonAttributes = {
    class: 'return-button',
    id: 'returnButton',
  };

  const setAttributes = (element, attributes) => {
    Object.keys(attributes).forEach((attr) => element.setAttribute(attr, attributes[attr]));
  };

  const structure = document.createElement('div');
  const registrationStructure = document.createElement('div');
  const petspaceLogo = document.createElement('img');
  const desktopImg = document.createElement('img');
  const registrationBox = document.createElement('section');
  registrationBox.setAttribute('class', 'reg-box');
  const pUser = document.createElement('p');
  const form = document.createElement('form');
  const inputName = document.createElement('input');
  const inputEmail = document.createElement('input');
  const inputPW = document.createElement('input');
  const regMessage = document.createElement('p');
  const pwAndSubmit = document.createElement('div');
  pwAndSubmit.setAttribute('class', 'eyeAndSubmit');
  const eyeButton = document.createElement('button');
  eyeButton.setAttribute('id', 'seePasswordReg');
  eyeButton.setAttribute('class', 'seePassword');
  const eye = document.createElement('i');
  eye.setAttribute('class', 'fas fa-eye');
  const buttonRegister = document.createElement('button');
  const pOptions = document.createElement('p');
  const mediaLogo = document.createElement('div');
  mediaLogo.setAttribute('class', 'media-logos');
  const facebookLogo = document.createElement('img');
  const gmailLogo = document.createElement('img');
  const returnButton = document.createElement('button');

  setAttributes(structure, structureAttributes);
  setAttributes(registrationStructure, registrationStructureAttributes);
  setAttributes(petspaceLogo, petspaceLogoAttributes);
  setAttributes(desktopImg, desktopImgAttributes);
  setAttributes(form, formAttributes);
  setAttributes(inputName, inputNameAttributes);
  setAttributes(inputEmail, inputEmailAttributes);
  setAttributes(inputPW, inputPWAttributes);
  setAttributes(regMessage, messageAttributes);
  setAttributes(buttonRegister, buttonRegisterAttributes);
  setAttributes(facebookLogo, facebookLogoAttributes);
  setAttributes(gmailLogo, gmailLogoAttributes);
  setAttributes(returnButton, returnButtonAttributes);

  pUser.textContent = 'Crea un usuario y contraseña';
  buttonRegister.textContent = 'Regístrate';
  pOptions.textContent = 'o regístrate con:';
  returnButton.textContent = 'Regresa al inicio';

  eyeButton.append(eye);
  pwAndSubmit.append(eyeButton, buttonRegister);
  form.append(inputName, inputEmail, inputPW, regMessage, pwAndSubmit);
  mediaLogo.append(facebookLogo, gmailLogo);
  registrationBox.append(pUser, form, pOptions, mediaLogo);
  registrationStructure.append(petspaceLogo, registrationBox, returnButton);
  structure.append(desktopImg, registrationStructure);

  returnButton.addEventListener('click', () => { onNavigate('/CDMX012-social-network/src/'); });
  eyeButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputPW.type === 'password') {
      inputPW.type = 'text';
    } else {
      inputPW.type = 'password';
    }
  });

  buttonRegister.addEventListener('click', (e) => {
    e.preventDefault();
    const name = inputName.value;
    const email = inputEmail.value;
    const password = inputPW.value;
    const message = regMessage;
    createAccount(message, email, password, name);
  });

  gmailLogo.addEventListener('click', () => {
    signInWithGoogle();
  });

  facebookLogo.addEventListener('click', () => {
    signInWithFacebook();
  });

  return structure;
};
