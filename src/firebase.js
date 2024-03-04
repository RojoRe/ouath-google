// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWefIxUP5jw4Mux3MassU7MqizHY2hskw",
  authDomain: "todo-app-yt-f884a.firebaseapp.com",
  projectId: "todo-app-yt-f884a",
  storageBucket: "todo-app-yt-f884a.appspot.com",
  messagingSenderId: "432300944285",
  appId: "1:432300944285:web:47a060e1cc78ed88a79d74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
