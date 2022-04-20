/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-cycle */
import { deletePost, addPostCollection, editPost } from '../lib/addFirestore.js';
import { accessPosts } from '../lib/readFirestore.js';

export const editPublication = (user, postUser, postId, postArea) => {
  if (user === postUser) {
    const editInput = document.createElement('input');
    editInput.setAttribute('class', 'edit-input');
    const pubText = document.getElementById(`text${postId}`).innerText;
    console.log(pubText);
    const textSpace = document.getElementById(`textSapce${postId}`);
    textSpace.innerHTML = `
  <input class='to-modify-text' id='modifyText${postId}' value='${pubText}' />
  <img class='modify-text-icon' id='modifyTextIcon' src='img/modifyIcon.png' />
  `;
    const textInput = document.getElementById(`modifyText${postId}`);
    const end = textInput.value.length;
    textInput.setSelectionRange(end, end);
    textInput.focus();
    const modifyIcon = document.getElementById('modifyTextIcon');
    modifyIcon.addEventListener('click', () => {
      const modifiedText = textInput.value;
      console.log(modifiedText);
      textSpace.innerHTML = `<p class='publication-text' id='text${postId}'></p>`;
      const finalText = document.getElementById(`text${postId}`);
      finalText.innerHTML = modifiedText;
      editPost(postId, modifiedText, postArea);
    });
  }
};

export const deletePublication = (user, postUser, postId, postArea) => {
  let publicationDeletedMsg = '';
  if (user === postUser) {
    if (window.confirm('¿Segurx que deseas borrar?')) {
      deletePost(postId, postArea);
      publicationDeletedMsg = 'esta publicación ha sido eliminada';
      return publicationDeletedMsg;
    }
  } publicationDeletedMsg = 'no se pudo eliminar';
  return publicationDeletedMsg;
};

export const publishPublication = (publicationInput, postArea) => {
  if (publicationInput === null || publicationInput === '') {
    alert('No has escrito una publicación');
  } else {
    addPostCollection(publicationInput);
    accessPosts(postArea);
  }
};
