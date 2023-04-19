// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9S_pCwYMGJd4vVbhhsS9O87oKDwFMg4U",
  authDomain: "kwitter-c0e82.firebaseapp.com",
  projectId: "kwitter-c0e82",
  storageBucket: "kwitter-c0e82.appspot.com",
  messagingSenderId: "1001533381041",
  appId: "1:1001533381041:web:6103ce917b7852baa00590"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem-vindo(a) " + user_name + "!";

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
}