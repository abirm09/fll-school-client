import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import LogInWithGoogle from "../../Pages/Shared/LogInWithGoogle/LogInWithGoogle";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../Hooks/useAuth";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const { loginWIthEmail } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    loginWIthEmail(data.email, data.password)
      .then(res => console.log(res.user))
      .catch(err => console.log(err));
  };
  return (
    <section>
      <div className="cs-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          <div>
            <img
              src="https://i.ibb.co/jRy5Fy0/undraw-Mobile-login-re-9ntv.png"
              alt="Login"
            />
          </div>
          <div>
            <div className="flex justify-center">
              <form
                className="max-w-sm w-full"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="space-y-5">
                  <div className="cs-form-control">
                    <label htmlFor="email">Email</label>
                    <div>
                      <AiOutlineMail className="text-slate-400" />
                      <input
                        type="email"
                        placeholder="Type your email"
                        {...register("email", { required: true })}
                      />
                    </div>
                  </div>
                  {errors.email?.type === "required" && (
                    <p role="alert" className="form-error">
                      Email is required
                    </p>
                  )}
                  <div className="cs-form-control">
                    <label htmlFor="password">Password</label>
                    <div>
                      <FaLock className="text-slate-400" />
                      <input
                        type={showPass ? "text" : "password"}
                        placeholder="Password"
                        {...register("password", { required: true })}
                      />
                      <span
                        className="cursor-pointer"
                        onClick={() => setShowPass(!showPass)}
                      >
                        {showPass ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>
                  </div>
                  {errors.email?.type === "required" && (
                    <p role="alert" className="form-error">
                      Email is required
                    </p>
                  )}
                  <input
                    type="submit"
                    value="Login"
                    className="cs-gradient-btn w-full"
                  />
                </div>
              </form>
            </div>
            <div className="text-center font-poppins pt-3">
              New to{" "}
              <span className="cs-text-gradient font-bold">FLL School</span> ?{" "}
              <Link to="/register" className="btn-link">
                Register
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

export default Login;
