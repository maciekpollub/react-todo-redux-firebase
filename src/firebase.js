import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyASZLYoUtT33DOb7PoVDFFvFyoCeYY36n0",
  authDomain: "todo-app-9f05c.firebaseapp.com",
  databaseURL: "https://todo-app-9f05c.firebaseio.com",
  projectId: "todo-app-9f05c",
  storageBucket: "todo-app-9f05c.appspot.com",
  messagingSenderId: "733884452135"
};

const firebaseApp = firebase.initializeApp(config);

export const database = firebaseApp.database();
