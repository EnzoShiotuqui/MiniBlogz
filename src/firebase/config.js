
import { initializeApp } from "firebase/app";
import {getFireStore} from "firebase/firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCx9-8P4RdHN1BY_yoPPiYJ9JUSgpPfHvE",
  authDomain: "miniblog-193ab.firebaseapp.com",
  projectId: "miniblog-193ab",
  storageBucket: "miniblog-193ab.appspot.com",
  messagingSenderId: "139570499306",
  appId: "1:139570499306:web:9af97c92c5a99d4b0fd193"
};


const app = initializeApp(firebaseConfig);

const db = getFireStore(app)

export { db }