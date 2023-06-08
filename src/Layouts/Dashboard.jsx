import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import logo from "../assets/logo.png";
import { useRole } from "../Hooks/useRole";
import ActiveLink from "../Components/ActiveLink/ActiveLink";
import { FaHome, FaWallet } from "react-icons/fa";
import { TbSelect } from "react-icons/tb";
import { BsFillCartCheckFill } from "react-icons/bs";
import { MdAddBox } from "react-icons/md";
import { RiFileUserFill } from "react-icons/ri";
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
        <a>Admin home</a>
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
      <section className="cs-container">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-2"
              className="btn drawer-button lg:hidden"
            >
              Open drawer
            </label>
            <Outlet />
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content font-poppins font-bold">
              {/* Sidebar content here */}
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
      </section>
    </>
  );
};

export default Dashboard;
