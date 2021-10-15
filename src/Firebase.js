import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import 'firebase/auth'

const firebase = initializeApp({
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID
    apiKey: "AIzaSyC7Nfu9lzgYqY8rEUFqz46F5HqmU49pAI0",
    authDomain: "desmond-online-dev.firebaseapp.com",
    projectId: "desmond-online-dev",
    storageBucket: "desmond-online-dev.appspot.com",
    messagingSenderId: "658588976574",
    appId: "1:658588976574:web:420ab0fb2077f715e3a5ef"
})

// export const auth = FirebaseApp.auth();
export default firebase;