import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <div className="w-full h-screen z-10 fixed top-0 left-0 flex justify-center items-center">
        <img
          src="https://i.ibb.co/m0SLWMC/Filled-fading-balls.gif"
          alt="loading anim"
        />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default PrivateRoute;
