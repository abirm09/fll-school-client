import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
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

  //log in with google
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
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
    user,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
