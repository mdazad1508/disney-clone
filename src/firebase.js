import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0DL2NHbdWnoSaeoMRMoa9Ev3nsGnPFBI",
  authDomain: "disney-clone-80092.firebaseapp.com",
  projectId: "disney-clone-80092",
  storageBucket: "disney-clone-80092.appspot.com",
  messagingSenderId: "132194039764",
  appId: "1:132194039764:web:3dbc54be3b943993b8c841",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const db = getFirestore(firebaseApp);
const storage = getStorage();

const provider = new firebase.auth.GoogleAuthProvider(); //used for login with google email id's.

export { auth, provider, storage };
export default db;
