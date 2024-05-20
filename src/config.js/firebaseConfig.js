
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

const firebaseConfig = {

        apiKey: "AIzaSyCR5AIXPqYpT0qby7BoqozVOSC5JZEUvXs",
        authDomain: "learn-firebase-ecd2a.firebaseapp.com",
        projectId: "learn-firebase-ecd2a",
        storageBucket: "learn-firebase-ecd2a.appspot.com",
        messagingSenderId: "1089550127156",
        appId: "1:1089550127156:web:96314606051b4604197a61",
        measurementId: "G-PEM7XTGRLM"
      
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db,collection, getDocs, addDoc };
