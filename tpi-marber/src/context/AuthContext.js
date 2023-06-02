import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../components/Firebase/Firebase.config";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";

const firestore = getFirestore();

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    console.log("error creating auth context");
  }
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState("");
  useEffect(() => {
    const suscribed = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        console.log("no hay usuario suscrito");
        setUser("");
      } else {
        setUser(currentUser);
      }
    });
    return () => suscribed();
  }, []);

  const register = async (email, password, rol) => {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const docuRef = doc(firestore, `users/${response.user.uid}`);
    const data = { email: email, rol: rol || "client" };
    await setDoc(docuRef, data);

    console.log(response);
  };

  const login = async (email, password) => {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response);
  };

  const loginWithGoogle = async () => {
    const responseGoogle = new GoogleAuthProvider();
    return await signInWithPopup(auth, responseGoogle);
  };

  const logout = async () => {
    const response = await signOut(auth);
    console.log(response);
  };
  return (
    <authContext.Provider
      value={{
        register,
        login,
        loginWithGoogle,
        logout,
        user,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
