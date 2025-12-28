import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export const SteamyBeansContext = createContext(null);

const SteamyBeansProvider = ({ children }) => {
    const navigate = useNavigate();
    const [newuser, setUser] = useState(null);

    useEffect(() => {
        const observer = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                setUser(user);
            } else {
                // User is signed out
                // ...
            }
        });
        return () => observer();

    }, [])

    const handleRegisterwithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signoutProcess = () => {
        return signOut(auth).then(() => {
            setUser(null);
            navigate('/');
            toast.success("SignOut Successfully!");
            // Sign-out successful.
        }).catch((error) => {
            toast.error(error.message);
            // An error happened.
        });
    }

    const loginProcess = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user);
                navigate('/dashboard');
                toast.success('Registration successful!');
                // ...
            })
            .catch((error) => {
                toast.error(error.message);
            });
    }

    const data = {
        handleRegisterwithEmail,
        newuser,
        signoutProcess,
        loginProcess
    }

    return (
        <SteamyBeansContext.Provider value={data}>
            {children}
        </SteamyBeansContext.Provider>
    );
};

export default SteamyBeansProvider;