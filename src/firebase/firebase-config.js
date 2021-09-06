import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAa0AocwejTkjfHKdCuX1HTDbCiQe2eKpY",
  authDomain: "spring3-32e90.firebaseapp.com",
  projectId: "spring3-32e90",
  storageBucket: "spring3-32e90.appspot.com",
  messagingSenderId: "957879043892",
  appId: "1:957879043892:web:569809f8ca6c27a9dbc761"
};


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export {
    db,
    googleAuthProvider,
    facebookAuthProvider,
    firebase
}

