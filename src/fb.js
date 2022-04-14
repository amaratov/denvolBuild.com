import * as firebase from 'firebase';
import 'firebase/storage';

let config = {
    apiKey: "AIzaSyC6T4TGGM2i7Kx6AGHUJBV6ElxpleR9j_E",
    authDomain: "denvol-beb9a.firebaseapp.com",
    databaseURL: "https://denvol-beb9a.firebaseio.com",
    projectId: "denvol-beb9a",
    storageBucket: "denvol-beb9a.appspot.com",
    messagingSenderId: "22898260481",
    appId: "1:22898260481:web:61723bbca0b41d0f969e00",
    measurementId: "G-T8FPEJF1G9"
};

firebase.initializeApp(config);

export const database = firebase.database();
export const auth = firebase.auth();
export const provider = new firebase.auth.FacebookAuthProvider();
export const storage = firebase.storage();
