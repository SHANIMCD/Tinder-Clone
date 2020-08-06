import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBDffrxPZ80tnLMLPR2cAdD6RbOKyvS7T4",
  authDomain: "tinder-clone-project.firebaseapp.com",
  databaseURL: "https://tinder-clone-project.firebaseio.com",
  projectId: "tinder-clone-project",
  storageBucket: "tinder-clone-project.appspot.com",
  messagingSenderId: "161276395139",
  appId: "1:161276395139:web:df9589c53d927d70f225b6",
  measurementId: "G-67JJTE8YWE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;