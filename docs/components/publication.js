/* eslint-disable import/no-cycle */
/* eslint-disable max-len */
// eslint-disable-next-line import/no-cycle

import { accessPosts, authObserver } from '../lib/readFirestore.js';
import { publishPublication } from './create-edit-and-delete-pubs.js';

export const pubBarFunc = () => {
  const root = document.getElementById('root');
  root.innerHTML = '';

  const publicationSpaceAttributes = {
    class: 'publication-space',
    id: 'publicationSpace',
  };
  const userPicSpaceAttributes = {
    class: 'user-pic-space',
    id: 'userPicSpace',
  };
  const userPicAttributes = {
    class: 'user-pic',
    id: 'userPic',
  };
  const userNameAttributes = {
    class: 'user-name',
    id: 'userName',
  };
  const publicationInputAttributes = {
    class: 'publication-input',
    id: 'publicationInput',
    placeholder: 'Publica algo...',
    autocomplete: 'off',
  };
  const uploadImageIconAttributes = {
    class: 'upload-image-icon pub-icon',
    id: 'uploadImageIcon',
    src: './img/imageIcon.png',
  };
  const uploadLocationAttributes = {
    class: 'upload-location-icon pub-icon',
    id: 'uploadLocationIcon',
    src: './img/locationUploadIcon.png',
  };
  const publishButtonAttributes = {
    class: 'publish-button',
    id: 'publishButton',
  };

  const setAttributes = (element, attributes) => {
    Object.keys(attributes).forEach((attr) => element.setAttribute(attr, attributes[attr]));
  };

  const publicationSpace = document.createElement('div');
  const createPublications = document.createElement('section');
  const firstBox = document.createElement('section');
  const secondBox = document.createElement('section');
  const thirdBox = document.createElement('section');
  const userPicSpace = document.createElement('figure');
  const userPic = document.createElement('img');
  const userName = document.createElement('p');
  const publicationInput = document.createElement('input');
  const uploadSpace = document.createElement('figure');
  const uploadImageIcon = document.createElement('img');
  const uploadLocation = document.createElement('img');
  const publishButton = document.createElement('button');
  const postArea = document.createElement('div');

  setAttributes(publicationSpace, publicationSpaceAttributes);
  setAttributes(userPicSpace, userPicSpaceAttributes);
  setAttributes(userPic, userPicAttributes);
  setAttributes(userName, userNameAttributes);
  setAttributes(publicationInput, publicationInputAttributes);
  setAttributes(uploadImageIcon, uploadImageIconAttributes);
  setAttributes(uploadLocation, uploadLocationAttributes);
  setAttributes(publishButton, publishButtonAttributes);
  createPublications.setAttribute('class', 'create-pubs');
  firstBox.setAttribute('class', 'pub-first-box');
  secondBox.setAttribute('class', 'pub-second-box');
  uploadSpace.setAttribute('class', 'upload-space');
  thirdBox.setAttribute('class', 'pub-third-box');
  postArea.setAttribute('id', 'postArea');

  publishButton.innerText = 'Publicar';

  authObserver(userName, userPic);

  userPicSpace.appendChild(userPic);
  firstBox.append(userPicSpace, userName);
  secondBox.appendChild(publicationInput);
  uploadSpace.append(uploadImageIcon, uploadLocation);
  thirdBox.append(uploadSpace, publishButton);
  createPublications.append(firstBox, secondBox, thirdBox);
  publicationSpace.append(createPublications, postArea);

  document.addEventListener('DOMContentLoaded', accessPosts(postArea));

  publishButton.addEventListener('click', () => {
    console.log(publicationInput.value);
    publishPublication(publicationInput.value, postArea);
    publicationInput.value = null;
  });

  return publicationSpace;
};
