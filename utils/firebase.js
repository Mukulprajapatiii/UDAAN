import { initializeApp } from "firebase/app";

import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  setDoc,
} from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyB8UfltQHRM39NkvyI3hHV_xNkSfHeF11I",
  authDomain: "udaan-d1803.firebaseapp.com",
  projectId: "udaan-d1803",
  storageBucket: "udaan-d1803.appspot.com",
  messagingSenderId: "304834923331",
  appId: "1:304834923331:web:27f7dca79101ef30667df6"
});

const db = getFirestore();

export { app, db, collection, getDocs, getDoc, doc, setDoc };
