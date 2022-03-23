import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBvEAyoIxu3oKzVG5e00EVZHHH_Ejaw3Bg",
    authDomain: "isl-project-4e4e8.firebaseapp.com",
    projectId: "isl-project-4e4e8",
    storageBucket: "isl-project-4e4e8.appspot.com",
    messagingSenderId: "768210670339",
    appId: "1:768210670339:web:cee6b3d029fe3fdd11cf36",
    measurementId: "G-R53F17M47Y"
};

export const app = initializeApp(firebaseConfig);
export default getFirestore();
