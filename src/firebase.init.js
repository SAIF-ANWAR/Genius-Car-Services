import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBSELQV6B_Li9XjeGz5zBXDEXXwWoxgz4c",
    authDomain: "latest-genius-car-services.firebaseapp.com",
    projectId: "latest-genius-car-services",
    storageBucket: "latest-genius-car-services.appspot.com",
    messagingSenderId: "71674127127",
    appId: "1:71674127127:web:ece3940eeaba965e89cd52",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;