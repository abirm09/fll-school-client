import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import { useAuth } from "../Hooks/useAuth";
import logo from "../assets/logo.png";
import Footer from "../Pages/Shared/Footer/Footer";
const Main = () => {
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
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
