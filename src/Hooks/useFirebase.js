import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, updateProfile, getIdToken, signOut } from "firebase/auth";

//initialize Firebase app-----
initializeFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [admin, setAdmin] = useState(false)
    const [authError, setAuthError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();
    const [idToken, setIdToken] = useState('')

    // register user 
    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)

            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;
                // ...
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser)
                // save to database-------------
                saveUsers(email, name, 'POST')
                // updateProfile----------
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });

                history.replace("/");




            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                setAuthError(error.message)
                // ..
            }).finally(() => {
                setIsLoading(false);


            })
    }


    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;
                // ...
                const destination = location?.state?.from || '/';
                history.replace(destination)
                setAuthError('')

            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                setAuthError(errorMessage)
            }).finally(() => {
                setIsLoading(false)

            })
    }


    // Google sing in----------------------

    const signInWithGoogle = (location, history) => {
        setIsLoading(true)
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const destination = location?.state?.from || '/';
                history.replace(destination)
                const user = result.user;
                // save user to database--
                saveUsers(user.email, user.displayName, 'PUT')

                setAuthError('')
            }).catch((error) => {
                setAuthError(error.message)

            }).finally(() => {
                setIsLoading(false)

            });
    }

    // save user to database-------------
    const saveUsers = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('https://doctor-protal-server.onrender.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }

    //observer user state change------------------
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsLoading(true)
            if (user) {

                // const uid = user.uid;
                setUser(user)
                getIdToken(user)
                    .then((idToken) => {
                        setIdToken(idToken)
                    })
            } else {
                setUser({});
            }
            setIsLoading(false)
        })
        return () => unsubscribe;
    }, [auth])


    // logout ----------------
    const logout = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
        }).catch((error) => {
            // An error happened.
        }).finally(() => {
            setIsLoading(false)
        })
    }

    // get admin ============================
    useEffect(() => {

        // setIsLoading(true)
        fetch(`https://doctor-protal-server.onrender.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {

                setAdmin(data.admin)
            })
            .catch(err => console.log(err))
            .finally(() => {
                // setIsLoading(false)
            })
    }, [user.email])

    return {
        user,
        registerUser,
        loginUser,
        logout,
        isLoading,
        signInWithGoogle,
        authError,
        admin,
        idToken

    }
}
export default useFirebase;