import React, { useContext, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged
} from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    try {
      return createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
      throw e;
    }
  }

  function login(email, password) {
    try {
      return signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      throw e;
    }
  }

  function logout() {
    try {
      return auth.signOut();
    } catch (e) {
      throw e;
    }
  }

  function resetPassword(email) {
    
    try{
      return sendPasswordResetEmail(auth, email);
    }
    catch(e){
      throw e
    }
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
