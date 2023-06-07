import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";

export const useAuth = () => {
  const authInfo = useContext(AuthContext);
  return authInfo;
};
