import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { collection, getFirestore, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
const { initializeAppCheck, ReCaptchaV3Provider } = require("firebase/app-check");

const firebaseConfig = {
    apiKey: "AIzaSyCE2TwaHhgF11IxJ4lfAb_55Ng24wDO1dY",
    authDomain: "hotel-d6c5f.firebaseapp.com",
    projectId: "hotel-d6c5f",
    storageBucket: "hotel-d6c5f.appspot.com",
    messagingSenderId: "200680326186",
    appId: "1:200680326186:web:e57a6383e1076ad5a56f53",
    measurementId: "G-TT71JVX7FT"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const passeiosRef = collection(db, "passeios");
const docRef = id => doc(db, "passeios", id);

const appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider('6LecEXkdAAAAADKldZPakSebI6kcnSHkCtJHSPlG'),
    isTokenAutoRefreshEnabled: true
});

const firebase = {
    app,
    analytics,
    auth,
    signInWithEmailAndPassword,
    signOut,
    getDocs,
    getDoc,
    doc,
    query,
    where,
    passeiosRef,
    docRef
};

export default firebase;