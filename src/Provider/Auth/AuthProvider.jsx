import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../../firebase.init";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const axiosPublic = useAxiosPublic();

    const provider = new GoogleAuthProvider();

    const googleLogin = () => {
           return signInWithPopup(auth, provider)
    }

    const register = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const updateUserProfile = (updatedProfileData) => {
        return updateProfile(auth.currentUser, updatedProfileData) 
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signout = () => {
        setLoading(true);
        return signOut(auth);
    }


    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
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

                localStorage.removeItem('access-token');
                setLoading(false);
            }
      })

      return () => {
        unSubscribe();
      }

    },[axiosPublic])






    const userInfo ={
        user,
        setUser,
        loading,
        setLoading,
        register,
        login,
        updateUserProfile,
        signout,
        googleLogin,
        errorMessage,
        setErrorMessage,
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;