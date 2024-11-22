import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
const firebaseConfig = {
    apiKey: "AIzaSyCqtxsG7JJfb8UZGGtMAv51f9BerkJRsEA",
    authDomain: "disneyhotstar-clone-801da.firebaseapp.com",
    projectId: "disneyhotstar-clone-801da",
    storageBucket: "disneyhotstar-clone-801da.firebasestorage.app",
    messagingSenderId: "760728828895",
    appId: "1:760728828895:web:978e2867ca95040911a26a",
    measurementId: "G-LE846JGXMN"
  };
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
const storage=firebase.storage();
export {auth,provider,storage}
export default db