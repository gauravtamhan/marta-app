import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDh8nWod-mF6F2Ah8a0AKhag6EV_9EQQNM",
    authDomain: "marta-app-121f5.firebaseapp.com",
    databaseURL: "https://marta-app-121f5.firebaseio.com",
    projectId: "marta-app-121f5",
    storageBucket: "marta-app-121f5.appspot.com",
    messagingSenderId: "1062678801424",
    appId: "1:1062678801424:web:0084349cab77eb9120ee95"
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();