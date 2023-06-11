import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { BsFillEnvelopeAtFill, BsFillTelephoneFill } from "react-icons/bs";
const Footer = () => {
  return (
    <section className="bg-slate-950 py-10">
      <div className="cs-container text-white">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          <div className="space-y-3 col-span-1 md:col-span-2">
            <Link to="/" className="btn btn-ghost">
              <img src={logo} alt="Logo" className="w-[150px] h-[50px]" />
            </Link>
            <p className="font-poppins font-semibold text-xs">
              Unlock a world of languages at our school - embrace cultural
              diversity, broaden your horizons, and embark on a journey of
              lifelong learning.
            </p>
            <address className="space-y-1">
              <p>Satkhira, khulna, Bangladesh.</p>
              <p className="flex items-center gap-3">
                <BsFillEnvelopeAtFill />
                <span>mdabirm2004@gmail.com</span>
              </p>
              <p className="flex items-center gap-3">
                <BsFillTelephoneFill />
                <span>+8801789-699367</span>
              </p>
            </address>
          </div>
          <div>
            <h2 className="text-xl cs-text-gradient font-bold font-poppins mb-5 mt-10">
              Social
            </h2>
            <ul className="footer-social justify-center">
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/mdabirm09"
                >
                  <img
                    src="https://i.ibb.co/gSszV6K/004-facebook.png"
                    alt="Facebook"
                  />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/abirm09/"
                >
                  <img
                    src="https://i.ibb.co/wJgmjYL/003-instagram.png"
                    alt="Instagram"
                  />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/abirm09/"
                >
                  <img
                    src="https://i.ibb.co/k5jPMq1/001-linkedin.png"
                    alt="Linked in"
                  />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/abirm09    "
                >
                  <img
                    src="https://i.ibb.co/DVgSph6/002-twitter.png"
                    alt="Twitter"
                  />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/abirm09"
                >
                  <img src="https://i.ibb.co/C8JMmxn/github.png" alt="Github" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl cs-text-gradient font-bold font-poppins mb-5 mt-10">
              Quick links
            </h2>
            <div className="flex flex-col">
              <Link to="/">Home</Link>
              <Link to="/instructors">Instructors</Link>
              <Link to="/classes">Classes</Link>
              <Link to="/about">About</Link>
            </div>
          </div>
          <div>
            <h2 className="text-xl cs-text-gradient font-bold font-poppins mb-5 mt-10">
              Get started
            </h2>
            <div className="flex gap-3 justify-center">
              <Link to="/login" className="btn btn-outline px-5">
                Login
              </Link>
              <Link to="/register" className="cs-gradient-btn">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
