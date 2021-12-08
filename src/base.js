import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'
import "firebase/storage"


export const app = firebase.initializeApp({
    apiKey: "AIzaSyBG_0m83EaLB7XWeTDw7s9a6AuoH2Sni3g",
    authDomain: "hotel-management-949e6.firebaseapp.com",
    projectId: "hotel-management-949e6",
    storageBucket: "hotel-management-949e6.appspot.com",
    messagingSenderId: "849195814126",
    appId: "1:849195814126:web:31065575f243b29b4137ff"
});