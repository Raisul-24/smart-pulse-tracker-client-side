/* eslint-disable react/prop-types */
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.confiq";
import { createContext, useEffect, useState } from "react";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
   const [user,setUser] = useState(null);
   const [loading,setLoading] = useState(true);

   const createUser = (email,password) =>{
      setLoading(true);
      return createUserWithEmailAndPassword(auth,email,password);
   }
   useEffect(() =>{
      const unsubscribe = onAuthStateChanged(auth,currentUser =>{
         setUser(currentUser);
         // console.log("current User",currentUser);
         setLoading(false);
      });
      return () =>{
         return unsubscribe();
      }
   },[])

   const signIn = (email,password) =>{
      setLoading(true);
      return signInWithEmailAndPassword(auth,email,password);
   }
   const googleSignIn = () =>{
      setLoading(true);
      return signInWithPopup(auth,googleProvider);
   }
   const githubSignIn = () =>{
      setLoading(true);
      return signInWithPopup(auth,githubProvider);
   }
   
   const logOut = () => {
      return signOut(auth);
   }
   const authInfo ={
      user,
      loading,
      createUser,
      signIn,
      logOut,
      googleSignIn,
      githubSignIn
      
   }
   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;