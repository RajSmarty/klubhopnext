// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDhzvEvPHRtpsHVu_06DUmgrdt-mMfSsQ",
  authDomain: "klubhopwebapp.firebaseapp.com",
  projectId: "klubhopwebapp",
  storageBucket: "klubhopwebapp.appspot.com",
  messagingSenderId: "11474856475",
  appId: "1:11474856475:web:515b73cff014d9a9d626be"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage};