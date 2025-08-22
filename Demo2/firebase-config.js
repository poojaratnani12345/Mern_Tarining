import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyA6WjQugtNviHg8ApuOS4sJLNhJQLmwLt4",
    authDomain: "quize-demo-22287.firebaseapp.com",
    projectId: "quize-demo-22287",
    storageBucket: "quize-demo-22287.appspot.com",
    messagingSenderId: "541510783277",
    appId: "1:541510783277:web:107ae671f6bc0684d3c3a4",
    measurementId: "G-05SC1TSJQ3"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
