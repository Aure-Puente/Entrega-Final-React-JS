import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDhTzQYURy79RYDSbQDQgkRpflwbHY-Mgw",
    authDomain: "guitar-shop-1935b.firebaseapp.com",
    projectId: "guitar-shop-1935b",
    storageBucket: "guitar-shop-1935b.appspot.com",
    messagingSenderId: "756772750024",
    appId: "1:756772750024:web:cf9675c533c82854315bfd"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)