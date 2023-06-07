import { Link } from "react-router-dom";
import ActiveLink from "../../../Components/ActiveLink/ActiveLink";
import logo from "../../../assets/logo.png";
import { useAuth } from "../../../Hooks/useAuth";
import { useState } from "react";
import { setTheme } from "../../../Utility/Theme/theme";
import sun from "../../../assets/svg/sun.svg";
import moon from "../../../assets/svg/moon.svg";
import { FaUserAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { BsFillGearFill } from "react-icons/bs";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const retrieveTheme = localStorage.getItem("theme") === "dark";
  const [isDark, setIsDark] = useState(retrieveTheme);

  const handleTheme = () => {
    setIsDark(!isDark);
    setTheme(!isDark);
  };
  const navLinks = (
    <>
      <li>
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/instructors">Instructors</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/classes">Classes</ActiveLink>
      </li>
      {!user ? (
        <>
          <Link to="/login">
            <button className="cs-gradient-btn ms-3">Log in</button>
          </Link>
        </>
      ) : (
        <>
          <li>
            <ActiveLink to="/dashboard">Dashboard</ActiveLink>
          </li>
          <li className="p-0">
            <details className="dropdown">
              <summary className="m-1">
                <img
                  src={user?.photoURL}
                  alt="user profile"
                  className="p-0 rounded-full"
                />
              </summary>
              <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 z-10">
                <li>
                  <a>
                    <FaUserAlt /> {user?.displayName}
                  </a>
                </li>
                <li>
                  <a>
                    <BsFillGearFill /> settings
                  </a>
                </li>
                <hr />
                <li>
                  <a onClick={logOut}>
                    <FiLogOut /> Log out
                  </a>
                </li>
              </ul>
            </details>
          </li>
        </>
      )}

      <button onClick={handleTheme} className="btn btn-accent ms-5">
        {isDark ? (
          <img src={sun} alt="Sun" className="w-6 h-6" />
        ) : (
          <img src={moon} alt="Moon" className="w-6 h-6" />
        )}
      </button>
    </>
  );
  return (
    <div className="bg-base-100">
      <div className="navbar cs-container">
        <div className="navbar-start w-full">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-poppins font-semibold"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="ms-auto mr-3 md:mr-0 md:ms-0">
            <img src={logo} alt="Logo" className="w-[150px] btn btn-ghost" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-poppins font-semibold items-center">
            {navLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
