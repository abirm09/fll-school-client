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
import { baseUrl } from "../../Hooks/useAxiosSecure";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [darkTheme, setDarkTheme] = useState(
    localStorage.getItem("theme") === "dark"
  );
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
  const logOut = async () => {
    return signOut(auth)
      .then(() => {})
      .catch(err => console.log(err));
  };
  //observe user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser?.email) {
        fetch(`${baseUrl}jwt?email=${currentUser.email}`)
          .then(res => res.json())
          .then(data => localStorage.setItem("access_token", data.token));
      }
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
    loading,
    darkTheme,
    setDarkTheme,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
