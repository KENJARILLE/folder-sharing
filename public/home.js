// home.js
// home.js

// Firebase setup (ensure this is included in your code)
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Initialize Firebase with your project's config
const firebaseConfig = {
    apiKey: "AIzaSyB1wwcVJpZHraOaJOG1w5yFDJEk_T-6qBk",
    authDomain: "folder-sharing-f7df9.firebaseapp.com",
    projectId: "folder-sharing-f7df9",
    storageBucket: "folder-sharing-f7df9.appspot.com",
    messagingSenderId: "464700051533",
    appId: "1:464700051533:web:612e3e27ae3624ee8b4c04",
    measurementId: "G-9Q7SYT6BWF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();


// Add event listener to the logout button
document.getElementById('logout-button').addEventListener('click', function() {
    // Redirect to index.html
    window.location.href = 'index.html';
});
