import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import logo from "../assets/logo.png";
import { useRole } from "../Hooks/useRole";
import ActiveLink from "../Components/ActiveLink/ActiveLink";
import { FaGraduationCap, FaHome, FaUsers, FaWallet } from "react-icons/fa";
import { TbSelect } from "react-icons/tb";
import { BsFillCartCheckFill } from "react-icons/bs";
import { MdAddBox } from "react-icons/md";
import { RiFileUserFill } from "react-icons/ri";
import Footer from "../Pages/Shared/Footer/Footer";
import { AiOutlineMenuFold } from "react-icons/ai";
const Dashboard = () => {
  const { role } = useRole();
  const user = (
    <>
      <li>
        <ActiveLink to="/dashboard/my-selected-classes">
          <TbSelect /> My selected classes
        </ActiveLink>
      </li>
      <li>
        <ActiveLink to="/dashboard/my-enrolled-classes">
          <BsFillCartCheckFill /> My Enrolled classes
        </ActiveLink>
      </li>
      <li>
        <ActiveLink to="/dashboard/payment-history">
          <FaWallet /> Payment history
        </ActiveLink>
      </li>
    </>
  );
  const admin = (
    <>
      <li>
        <ActiveLink to="/dashboard/manage-classes">
          <FaGraduationCap /> Manage classes
        </ActiveLink>
      </li>
      <li>
        <ActiveLink to="/dashboard/manage-users">
          <FaUsers /> Manage users
        </ActiveLink>
      </li>
    </>
  );
  const instructor = (
    <>
      <li>
        <ActiveLink to="/dashboard/add-class">
          <MdAddBox /> Add a class
        </ActiveLink>
      </li>
      <li>
        <ActiveLink to="/dashboard/my-classes">
          <RiFileUserFill /> My Classes
        </ActiveLink>
      </li>
    </>
  );
  let link = user;
  if (role === "instructor") {
    link = instructor;
  } else if (role === "admin") {
    link = admin;
  }
  return (
    <>
      <NavBar />
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="cs-container w-full overflow-hidden">
          <div className="drawer-content">
            {/* Page content here */}
            <div className="flex justify-end my-5">
              <label htmlFor="my-drawer-4" className="drawer-button btn">
                <AiOutlineMenuFold /> Open
              </label>
            </div>
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            <li>
              <img src={logo} alt="Logo" className="w-[200px] mx-auto" />
            </li>
            <hr />
            <li>
              <ActiveLink to="/dashboard/home">
                <FaHome /> Home
              </ActiveLink>
            </li>
            {link}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
