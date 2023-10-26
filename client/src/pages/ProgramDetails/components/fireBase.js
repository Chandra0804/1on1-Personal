import firebase from 'firebase/app';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDZWDhTHWoMj59KS0fzht69gMWLrmUoSvo",
    authDomain: "on1teachingfriend.firebaseapp.com",
    projectId: "on1teachingfriend",
    storageBucket: "on1teachingfriend.appspot.com",
    messagingSenderId: "437177475747",
    appId: "1:437177475747:web:8d8515106864d344619516"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;