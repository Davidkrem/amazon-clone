// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDgOmZPCr1K32VOWYnAgv9Hb-ans6yQ35I',
  authDomain: 'clone-a85db.firebaseapp.com',
  projectId: 'clone-a85db',
  storageBucket: 'clone-a85db.appspot.com',
  messagingSenderId: '1084861365885',
  appId: '1:1084861365885:web:ee48be7b173282c348fb14',
  measurementId: 'G-40WFTP9LDL',
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

export { auth, db };
