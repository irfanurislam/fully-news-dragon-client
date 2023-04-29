import React from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const auth = getAuth(app);
// const newuser = auth.currentUser
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    
 
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
//  const profileUpdate = (name,photo) =>{
//     return updateProfile(newuser, {
//         displayName: name, photoURL: photo
//     })
//  }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth,loggedUser =>{
        console.log('onauth change ',loggedUser)
        setUser(loggedUser)
        setLoading(false)
    })
    return () => {
        unsubscribe()
    }
},[])
  



    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        loading
       
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;