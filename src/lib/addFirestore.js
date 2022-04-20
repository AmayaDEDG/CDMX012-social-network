/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { onNavigate } from '../app.js';
import { accessPosts } from './readFirestore.js';

const db = firebase.firestore();

export const addUserCollection = (user) => {
  let photoURL = user.photoURL;
  if (photoURL === null || photoURL === undefined) {
    photoURL = './img/cuteplanet.webp';
  } else {
    photoURL = user.photoURL;
  }
  db.collection('users').add({
    user: user.uid,
    name: user.displayName,
    photo: photoURL,
  })
    .then(() => {
      onNavigate('/mainPage');
    });
};

export const addPostCollection = (input) => {
  const user = firebase.auth().currentUser;
  const date = new Date();
  db.collection('posts').add({
    user: user.uid,
    name: user.displayName,
    text: input,
    date: `${date.getHours()}${':'}${date.getMinutes()} ${date.getDate()}${'/'}${date.getMonth() + 1}${'/'}${date.getFullYear()}`,
    time: firebase.firestore.Timestamp.now(),
    likes: [],
  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

export const addLikes = (docId, userId, postArea, likes) => {
  const docRef = db.collection('posts').doc(docId);
  if (likes.includes(userId)) {
    docRef.update({
      likes: firebase.firestore.FieldValue.arrayRemove(userId),
    });
  } else {
    docRef.update({
      likes: firebase.firestore.FieldValue.arrayUnion(userId),
    });
  }
  postArea.innerHTML = '';
  accessPosts(postArea);
};

export const editPost = (docId, input, postArea) => {
  db.collection('posts').doc(docId).update({ text: input }).then(() => {
    console.log('¡Has editado esta publicación!');
    postArea.innerHTML = '';
    accessPosts(postArea);
  })
    .catch((error) => {
      console.error('Error al actualizar documento: ', error);
    });
};

export const deletePost = (postId, postArea) => {
  db.collection('posts').doc(postId).delete().then(() => {
    console.log('¡Has borrado esta publicación!');
    postArea.innerHTML = '';
    accessPosts(postArea);
  })
    .catch((error) => {
      console.error('Error removing document: ', error);
    });
};
