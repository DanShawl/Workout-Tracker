import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyC92aCeKcr75LOZ4j7nGInnZY6ARLELEB8',

  authDomain: 'todo-app-1500a.firebaseapp.com',

  projectId: 'todo-app-1500a',

  storageBucket: 'todo-app-1500a.appspot.com',

  messagingSenderId: '285734572286',

  appId: '1:285734572286:web:c739b2ddab8050c16955af',

  measurementId: 'G-LFB11148HD',
});

const db = firebaseApp.firestore();

export default db;
