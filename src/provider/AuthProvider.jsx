import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithPopup, } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googlePopup = (googleProvider) => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userInfo = {
        user,
        loading,
        createUser,
        googlePopup


    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;