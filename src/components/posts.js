/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
// eslint-disable-next-line import/no-cycle
// import { pubBarFunc } from './publication.js';
// import { accessLikes } from '../lib/firebasePosts.js';
import { addLikes } from '../lib/firestore.js';
import { editPublication, deletePublication } from './create-edit-and-delete-pubs.js';
// import { accessLikes } from '../lib/firebasePosts.js';
const db = firebase.firestore();

export const createPosts = (input, user, currentUserId, likes, photo, postId, postUser) => {
  let likeImg = '';
  if (Object.values(likes).includes(currentUserId)) {
    likeImg = 'img/likeIconFilled.png';
  } else {
    likeImg = 'img/likeIcon.png';
  }

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
  const editPubAttributes = {
    class: 'edit-pub',
    id: 'editPub',
    src: './img/editicon.webp',
  };
  const deletePubAttributes = {
    class: 'delete-pub',
    id: 'deletePub',
    src: './img/deleteicon.png',
  };
  const pubTextAttributes = {
    class: 'publication-input',
  };
  const likeIconAttributes = {
    class: 'like-icon new-pub-icon',
    id: postId,
    src: likeImg,
  };
  const likeCountAttributes = {
    class: 'like-count',
    id: 'likeCount',
  };
  const commentIconAttributes = {
    class: 'comment-icon new-pub-icon',
    id: 'commentIcon',
    src: 'img/commentIcon.png',
  };
  const commentSpaceAttributes = {
    class: 'publication-input',
    id: 'commentSpace',
    placeholder: 'Haz un comentario ...',
  };

  const setAttributes = (element, attributes) => {
    Object.keys(attributes).forEach((attr) => element.setAttribute(attr, attributes[attr]));
  };

  const newPublication = document.createElement('section');
  const newPubPicSpace = document.createElement('figure');
  const newPubPic = document.createElement('img');
  const newPubName = document.createElement('p');
  const newPubText = document.createElement('p');
  const newPubProfile = document.createElement('section');
  const editPub = document.createElement('img');
  const deletePub = document.createElement('img');
  const likePost = document.createElement('section');
  const likeIcon = document.createElement('img');
  const likeCount = document.createElement('p');
  const commentPost = document.createElement('section');
  const commentIcon = document.createElement('img');
  const commentSpace = document.createElement('input');

  newPublication.setAttribute('class', 'create-pubs');
  newPubProfile.setAttribute('class', 'pub-first-box new-pub-profile');
  likePost.setAttribute('class', 'like-post');
  commentPost.setAttribute('class', 'comment-post');

  setAttributes(newPubText, pubTextAttributes);
  setAttributes(newPubPicSpace, userPicSpaceAttributes);
  setAttributes(newPubPic, userPicAttributes);
  setAttributes(newPubName, userNameAttributes);
  setAttributes(editPub, editPubAttributes);
  setAttributes(deletePub, deletePubAttributes);
  setAttributes(likeIcon, likeIconAttributes);
  setAttributes(likeCount, likeCountAttributes);
  setAttributes(commentIcon, commentIconAttributes);
  setAttributes(commentSpace, commentSpaceAttributes);

  newPubText.innerText = input;
  const localCount = likes.length;
  likeCount.innerText = localCount;

  getUserInfo(postUser, newPubName, newPubPic);

  newPubPicSpace.appendChild(newPubPic);
  likePost.append(likeIcon, likeCount);
  newPubProfile.append(newPubPicSpace, newPubName, likePost);
  commentPost.append(commentIcon, commentSpace);
  newPublication.append(newPubProfile, newPubText, editPub, deletePub, commentPost);

  // delete
  const deleteMessage = document.createElement('p');
  deleteMessage.innerText = 'has borrado esta publicación';

  const postArea = document.querySelector('#postArea');
  postArea.append(newPublication);

  const likeButton = document.getElementById(postId);
  likeButton.addEventListener('click', () => {
    addLikes(postId, currentUserId, postArea, likes);
    likeCount.innerText = localCount;
  });

  // botón editar
  editPub.addEventListener('click', () => {
    newPublication.appendChild(editPublication(user, postId));
  });

  // botón para borrar
  deletePub.addEventListener('click', () => {
    newPublication.appendChild(deletePublication(user, postId, postArea));
  });

  return postArea;
};
