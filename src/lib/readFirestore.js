/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import { createPosts } from '../components/posts.js';

const db = firebase.firestore();

export const getPostUser = (postUserId, usernameText, userPic) => {
  const userArray = [];
  db.collection('users').where('user', '==', postUserId)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        userArray.push(doc.data());
      });
      function uniqueUser(users) {
        return users.filter((e, index) => users.findIndex((a) => a.user === e.user) === index);
      }
      const userDoc = (uniqueUser(userArray))[0];
      usernameText.innerText = userDoc.name;
      userPic.setAttribute('src', userDoc.photo);
    })
    .catch((error) => {
      console.log('Error getting documents: ', error);
    });
};

export const accessPosts = (postArea) => {
  const postArray = [];
  db.collection('posts').orderBy('time', 'desc')
    .onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        postArray.push(doc);
      });
      function unique(posts) {
        return posts.filter((e, index) => posts.findIndex((a) => a.id === e.id) === index);
      }
      const filteredPosts = unique(postArray);
      postArea.innerHTML = '';
      filteredPosts.forEach((post) => {
        const doc = post.data();
        const user = firebase.auth().currentUser;
        createPosts(doc.text, doc.name, user.uid, doc.likes, post.id, doc.user);
      });
    });
};
