import React, { createContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/Firebase";

export const Authcontext = createContext();
const auth = getAuth(app);

const Usercontext = ({ children }) => {
  const [user, setuser] = useState("rahul");
  const [loder, setloder] = useState(true);

  // login
  const loginemail = (email, password) => {
    setloder(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //sign up
  const signupemail = (email, password) => {
    setloder(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //log out
  const logout = ()=>{
    localStorage.removeItem('token');
    return signOut(auth);
  }

  //user name update
  const usernameupdate = (username) => {
    setloder(true);
    return updateProfile(auth.currentUser, {
      displayName: username,
    });
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
      setloder(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authinfo = { user, loder,logout, signupemail, loginemail, usernameupdate };
  return (
    <Authcontext.Provider value={authinfo}>{children}</Authcontext.Provider>
  );
};

export default Usercontext;
