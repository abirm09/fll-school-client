import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../../Utility/Firebase/Firebase.config";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const [user, setUser] = useState(null);

  //create user with email and pass
  const createAccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //log in with email
  const loginWIthEmail = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  //log in with google
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //log out
  const logOut = () => {
    return signOut(auth)
      .then(() => {})
      .catch(err => console.log(err));
  };
  //observe user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });
    return () => {
      return unsubscribe();
    };
  }, [auth]);
  const data = {
    createAccount,
    googleLogin,
    loginWIthEmail,
    user,
    logOut,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
