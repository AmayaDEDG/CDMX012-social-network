global.firebase = {
  initializeApp: () => {
  },
  auth: () => ({
    signInWithEmailAndPassword: (result) => new Promise((resolve, reject) => {
      if (result === true) {
        resolve('yei');
      }
      reject('El correo o la contraseña es incorrecta');
    }),
    // signInWithEmailAndPassword: () => ({
    //   then: () => new Promise((resolve) => {
    //     resolve('yei');
    //   }),
    //   catch: () => new Promise((resolve) => {
    //     resolve('El usuario o contraseña es equivocado');
    //   }),
    // }),
    createUserWithEmailAndPassword: () => new Promise((resolve) => {
      resolve('');
    }),
    signInWithPopup: () => new Promise((resolve) => {
      resolve('');
    }),
  }),
  firestore: () => new Promise((resolve) => {
    resolve('');
  }),
  // signInWithGoogle: () => {
  //   const GoogleAuthProvider = () => {
  //   };
  // },
  // signInWithFacebook: () => {
  //   const FacebookAuthProvider = () => {
  //   };
  // },
};

export default firebase;
