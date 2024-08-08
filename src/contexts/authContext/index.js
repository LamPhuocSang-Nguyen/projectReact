import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import React, {useState, useEffect, useContext} from "react"
import {onAuthStateChanged} from "firebase/auth";

const AuthContext = React.createContext();


export function useAuth(){
    return useContext(AuthContext);
}


export function AuthProvider({children}){
    const [currentUser,setCurrentUser] = useState(null);
    const [userLoggedIn, setUSerLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth, initializeUser);
        return unsubcribe;
    },[])

    async function initializeUser(user) {
        if(user){
            setCurrentUser({...user});
            setUSerLoggedIn(true);
        }
        else{
            setCurrentUser(null);
            setUSerLoggedIn(false);
        }
        setLoading(false);
    }

    const value = {
        currentUser,
        userLoggedIn,
        loading,
    }


    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}