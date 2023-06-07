import { useState } from "react";
import { AiOutlineLink, AiOutlineMail } from "react-icons/ai";
import { FaLock, FaEye, FaEyeSlash, FaUserAlt } from "react-icons/fa";
import LogInWithGoogle from "../../Pages/Shared/LogInWithGoogle/LogInWithGoogle";
import { Link } from "react-router-dom";
const Register = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <section>
      <div className="cs-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          <div>
            <img src="https://i.ibb.co/7rqXDcd/login.png" alt="Login" />
          </div>
          <div>
            <div className="flex justify-center">
              <form className="max-w-sm w-full">
                <div className="space-y-5">
                  <div className="cs-form-control">
                    <label htmlFor="name">Name</label>
                    <div>
                      <FaUserAlt className="text-slate-400" />
                      <input type="email" placeholder="Type your name" />
                    </div>
                  </div>
                  <div className="cs-form-control">
                    <label htmlFor="email">Email</label>
                    <div>
                      <AiOutlineMail className="text-slate-400" />
                      <input type="email" placeholder="Type your email" />
                    </div>
                  </div>
                  <div className="cs-form-control">
                    <label htmlFor="password">Password</label>
                    <div>
                      <FaLock className="text-slate-400" />
                      <input
                        type={showPass ? "text" : "password"}
                        placeholder="Password"
                      />
                      <span
                        className="cursor-pointer"
                        onClick={() => setShowPass(!showPass)}
                      >
                        {showPass ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>
                  </div>
                  <div className="cs-form-control">
                    <label htmlFor="password">Confirm Password</label>
                    <div>
                      <FaLock className="text-slate-400" />
                      <input
                        type={showPass ? "text" : "password"}
                        placeholder="Password"
                      />
                      <span
                        className="cursor-pointer"
                        onClick={() => setShowPass(!showPass)}
                      >
                        {showPass ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>
                  </div>
                  <div className="cs-form-control">
                    <label htmlFor="email">Email</label>
                    <div>
                      <AiOutlineLink className="text-slate-400" />
                      <input type="email" placeholder="Type your email" />
                    </div>
                  </div>
                  <input
                    type="submit"
                    value="Register"
                    className="cs-gradient-btn w-full"
                  />
                </div>
              </form>
            </div>
            <div className="text-center font-poppins pt-3">
              Already have an account ?
              <Link to="/login" className="btn-link">
                {" "}
                Login
              </Link>
            </div>
            <div className="divider max-w-sm mx-auto">OR</div>
            <LogInWithGoogle />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
