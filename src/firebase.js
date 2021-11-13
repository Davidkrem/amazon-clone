import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDgOmZPCr1K32VOWYnAgv9Hb-ans6yQ35I',
  authDomain: 'clone-a85db.firebaseapp.com',
  projectId: 'clone-a85db',
  storageBucket: 'clone-a85db.appspot.com',
  messagingSenderId: '1084861365885',
  appId: '1:1084861365885:web:ee48be7b173282c348fb14',
  measurementId: 'G-40WFTP9LDL',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
