import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyC6ry-g53BWUG5SkLsBISY1AB-Wxm1z1Ds",
        authDomain: "react-project-5ab0b.firebaseapp.com",
        databaseURL: "https://react-project-5ab0b.firebaseio.com",
        projectId: "react-project-5ab0b",
        storageBucket: "react-project-5ab0b.appspot.com",
        messagingSenderId: "344839076370",
        appId: "1:344839076370:web:40817d9e730105d7c6b6cb"
      }
);

const base = Rebase.createClass(firebaseApp.database());

export{firebaseApp} ;

export default base;