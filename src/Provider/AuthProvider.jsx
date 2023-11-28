/* eslint-disable react/prop-types */
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.confiq";
import { createContext, useEffect, useState } from "react";
import UseAxiosPublic from "../hooks/UseAxiosPublic";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);
   const axiosPublic = UseAxiosPublic();



   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   }


   const signIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   }
   const googleSignIn = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
   }
   const githubSignIn = () => {
      setLoading(true);
      return signInWithPopup(auth, githubProvider);
   }

   const logOut = () => {
      return signOut(auth);
   }
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
         setUser(currentUser);
         console.log('current user', currentUser);
         if (currentUser) {
            // get token and store client
            const userInfo = { email: currentUser.email };
            axiosPublic.post('/jwt', userInfo)
               .then(res => {
                  if (res.data.token) {
                     localStorage.setItem('access-token', res.data.token);
                     setLoading(false);
                  }
               })
         }
         else {
            // todo: remove token (if store in client side, local storage, caching, in memory)
            localStorage.removeItem('access-token');
            setLoading(false);
         }

      });
      return () => {
         return unsubscribe();
      }
   }, [axiosPublic]
   )
   const authInfo = {
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