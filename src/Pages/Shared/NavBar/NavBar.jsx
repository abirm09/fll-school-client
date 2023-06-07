import { Link } from "react-router-dom";
import ActiveLink from "../../../Components/ActiveLink/ActiveLink";
import logo from "../../../assets/logo.png";

const NavBar = () => {
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
          <ul className="menu menu-horizontal px-1 font-poppins font-semibold">
            {navLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
