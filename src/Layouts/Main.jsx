import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import { useAuth } from "../Hooks/useAuth";
import logo from "../assets/logo.png";
const Main = () => {
  const navigation = useNavigation();
  const { loading } = useAuth();
  if (loading) {
    return (
      <div className="w-full h-screen z-10 fixed top-0 left-0 flex justify-center items-center">
        <img src={logo} alt="" className="md:max-w-xs max-w-[150px] w-4/5" />
      </div>
    );
  }
  return (
    <>
      <NavBar />
      {navigation.state === "loading" && (
        <div className="w-full min-h-screen bg-red-500 fixed top-0 left-0 flex justify-center items-center z-40">
          <img
            src="https://i.ibb.co/m0SLWMC/Filled-fading-balls.gif"
            className="w-screen h-screen"
            alt=""
          />
        </div>
      )}
      <Outlet />
    </>
  );
};

export default Main;
