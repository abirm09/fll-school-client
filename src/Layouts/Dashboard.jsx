import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Dashboard;
