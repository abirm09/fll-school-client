import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
import { useRole } from "../../Hooks/useRole";

const InstructorRoute = ({ children }) => {
  const { role, isRoleLoading } = useRole();
  const { user, logOut, loading } = useAuth();
  const location = useLocation();

  if (isRoleLoading || loading) {
    return (
      <div className="flex justify-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }
  if (user && role == "instructor") {
    return children;
  } else {
    logOut();
    return <Navigate to="/login" state={{ from: location }} />;
  }
};

export default InstructorRoute;
