import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import firebaseInit from "../firebase/firebase.init";

firebaseInit();
const useFirebase = () => {

    const auth = getAuth();
    const [newUser, setNewUser] = useState([]);
    const [authError, setAuthError] = useState('');
    const [loading, setLoading] = useState(true);

    const handleRegisterUser = (name, email, password) =>{

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            updateProfile(auth.currentUser, {
                displayName: name
            })
            const user = userCredential.user;
            setNewUser(user);
            setAuthError('');
        })
        .catch((error) => {
            const errorCode = error.code;
            setAuthError(errorCode);
        }).finally(()=>setLoading(false));

    }

    const handleSigninUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleSignoutUser = () =>{

        Swal.fire({
            title: 'Are you sure',
            text: "want to be logout now?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Log out',
            customClass: {
                confirmButton: 'alert__confirm--btn',
                cancelButton: 'alert__cancel--btn',
                closeButton: 'alert__close--btn',
                actions: "alert__close--btn",
                validationMessage: "alert__close--btn",
            }
          }).then((result) => {
            if (result.isConfirmed) {
                signOut(auth).then(() => {
                    setNewUser({});
                }).catch((error) => {
                    setAuthError(error.code);
                });
            }
        })
    }
 
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setNewUser(user);
              
            } else {
                setNewUser({});
            }
            setLoading(false)
        });
        return () => unsubscribed;
    },[auth])
    

    

    return {
        handleRegisterUser,
        authError,
        handleSigninUser,
        newUser,
        handleSignoutUser,
        setAuthError,
        setNewUser,
        setLoading,
        loading
    };
};

export default useFirebase;