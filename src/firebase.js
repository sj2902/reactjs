
import { initializeApp, getApps } from "firebase/app";
import { getStorage } from "firebase/storage";

import { getFirestore, getDocs, collection } from "firebase/firestore";
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBvEAyoIxu3oKzVG5e00EVZHHH_Ejaw3Bg",
    authDomain: "isl-project-4e4e8.firebaseapp.com",
    projectId: "isl-project-4e4e8",
    storageBucket: "isl-project-4e4e8.appspot.com",
    messagingSenderId: "768210670339",
    appId: "1:768210670339:web:cee6b3d029fe3fdd11cf36",
    measurementId: "G-R53F17M47Y",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const storage = getStorage(app);
// const authentication = getAuth();

// const user = authentication.currentUser;

// if (user !== null) {
    
//     const email = user.email;
//     const id = user.key();
//     console.log(email);
//     console.log(id);

    
    
//     }

// collection ref
// const colRef = collection(db,'SignUp')



// get collection data
// getDocs(colRef)
//   .then((snapshot) => {
//     let users = []
//     let user_id = []
//     snapshot.docs.forEach((doc) => {
//       users.push({...doc.data(), id: doc.id})
      
//     })
    
//     console.log(users)


//   })
//   .catch(err => {
//     console.log(err.message)
//   })