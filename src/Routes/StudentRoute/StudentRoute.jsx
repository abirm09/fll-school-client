import { Navigate } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
import { useRole } from "../../Hooks/useRole";

const StudentRoute = ({ children }) => {
  const { role, isRoleLoading } = useRole();
  const { logOut, loading, user } = useAuth();
  if (isRoleLoading || loading) {
    return (
      <div className="flex justify-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }
  if (user && role === "user") {
    return children;
  } else {
    logOut();
    return <Navigate to="/login"></Navigate>;
  }
};

export default StudentRoute;
