import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2YDPxtQxAla6mqi3MlyXbKDMKmFHuB7Y",
  authDomain: "beeruser-df5c6.firebaseapp.com",
  projectId: "beeruser-df5c6",
  storageBucket: "beeruser-df5c6.appspot.com",
  messagingSenderId: "622636394544",
  appId: "1:622636394544:web:bce72246adfce6e26ca5f5",
  measurementId: "G-W8FH7Z7BTH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
