/* eslint-disable max-classes-per-file */
global.firebase = {
  initializeApp: () => {
  },
  auth: () => ({
    signInWithEmailAndPassword: () => new Promise((resolve) => {
      resolve('');
    }),
    createUserWithEmailAndPassword: () => new Promise((resolve) => {
      resolve('');
    }),
    signInWithPopup: () => new Promise((resolve) => {
      resolve('');
    }),
    signInWithGoogle: () => {
      class GoogleAuthProvider {
        constructor() {
          this.id = 'email';
        }
      }
    },
    signInWithFacebook: () => {
      class FacebookAuthProvider {
        constructor() {
          this.id = 'email';
        }
      }
    },
  }),
  firestore: () => {
  },
};

export default firebase;
