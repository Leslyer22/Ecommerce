
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1logXY38kArB_Smgzq58QnqpoTBN_l8I",
  authDomain: "react-4b441.firebaseapp.com",
  projectId: "react-4b441",
  storageBucket: "react-4b441.appspot.com",
  messagingSenderId: "733984167411",
  appId: "1:733984167411:web:e96d411492d6b183a7ae86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);