import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBLM9PKVm1jt8OqONZT7aZalsVqfZuiyEw",
    authDomain: "clone-fe49a.firebaseapp.com",
    projectId: "clone-fe49a",
    storageBucket: "clone-fe49a.appspot.com",
    messagingSenderId: "951571605816",
    appId: "1:951571605816:web:c6395fe267d1906dc3f9cd"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export{ db, auth, provider };