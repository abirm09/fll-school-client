import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
import { useRole } from "../../Hooks/useRole";

const InstructorRoute = ({ children }) => {
  const { role, isRoleLoading } = useRole();
  const { user, logOut, loading } = useAuth();
  const location = useLocation();

  if (isRoleLoading || loading) {
    return <h2>Loading...</h2>;
  }
  if (user && role == "instructor") {
    return children;
  } else {
    logOut();
    <Navigate to="/login" state={{ from: location }} />;
  }
  return <div></div>;
};

export default InstructorRoute;
