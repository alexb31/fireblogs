import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyD-91UMKTlKkvCyfLj6KeSQssauzPDCWmo",
    authDomain: "fireblogs-7be7f.firebaseapp.com",
    projectId: "fireblogs-7be7f",
    storageBucket: "fireblogs-7be7f.appspot.com",
    messagingSenderId: "181564182594",
    appId: "1:181564182594:web:654506ad2242e186509ddb",
    measurementId: "G-0KJ2DBHD52"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp}
export default firebaseApp.firestore();
