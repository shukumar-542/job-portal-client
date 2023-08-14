import  { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';



const auth = getAuth(app)
export const AuthContext = createContext(null)
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    // const [role, setRole] = useState(null)


    // create use using google
    const googleProvider = new GoogleAuthProvider();
    const createUserWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // git hub login system
    const githubProvider = new GithubAuthProvider();
    const createUserWithGithub = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    // create user with email and password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user with email and password
    const loggedInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    
    // // get user role
    // useEffect(() => {
    //     if (user) {
    //         getRole(user.email).then(data => {
    //             setRole(data);
    //         })
    //     }
    // }, [user])
   


    // logout user
    const logOut = () => {
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUSer=>{
            setUser(currentUSer)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])


    const authInfo = {
        user,
        setUser,
        createUserWithGoogle,
        createUserWithGithub,
        createUser,
        loggedInUser,
        logOut,
        loading,
    }
    


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;