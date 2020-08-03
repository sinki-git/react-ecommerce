import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



    const config = {
        apiKey: "AIzaSyBYFomuBMypCuV2cFfVnAsZ0ReTIDQh8tw",
        authDomain: "crwn-db-a7e37.firebaseapp.com",
        databaseURL: "https://crwn-db-a7e37.firebaseio.com",
        projectId: "crwn-db-a7e37",
        storageBucket: "crwn-db-a7e37.appspot.com",
        messagingSenderId: "181806422842",
        appId: "1:181806422842:web:a18b092443039fadb04e03",
        measurementId: "G-PMMDM95L9T"
      };


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;