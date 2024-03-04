// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZRi4My44ztm5Q2uQSOHglerBE0Gr4Hzo",
  authDomain: "app-mobile-96068.firebaseapp.com",
  projectId: "app-mobile-96068",
  storageBucket: "app-mobile-96068.appspot.com",
  messagingSenderId: "605739662014",
  appId: "1:605739662014:web:ed81a54bd504ec9177fcef",
  measurementId: "G-00E111XBQM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const analytics = getAnalytics(app);

export {auth};
