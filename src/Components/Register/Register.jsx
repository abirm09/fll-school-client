import { useState } from "react";
import { AiOutlineLink, AiOutlineMail } from "react-icons/ai";
import { FaLock, FaEye, FaEyeSlash, FaUserAlt } from "react-icons/fa";
import LogInWithGoogle from "../../Pages/Shared/LogInWithGoogle/LogInWithGoogle";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { updateProfile } from "firebase/auth";
import { useAuth } from "../../Hooks/useAuth";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const { createAccount } = useAuth();
  const [logInErr, setLogInErr] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    createAccount(data?.email, data?.password)
      .then(res => {
        updateUser(res.user, data.name, data.photoURL)
          .then(() => {})
          .catch(err => console.log(err));
        console.log(res.user);
      })
      .catch(err => setLogInErr(err.message.split("/")[1].replace(")", "")));
  };
  const updateUser = (user, name, photo) => {
    return updateProfile(user, {
      displayName: name,
      photoURL: photo,
    });
  };
  return (
    <section>
      <div className="cs-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          <div>
            <img src="https://i.ibb.co/7rqXDcd/login.png" alt="Login" />
          </div>
          <div>
            <div className="flex justify-center">
              <form
                className="max-w-sm w-full"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="space-y-5">
                  <div className="cs-form-control">
                    <label htmlFor="name">Name</label>
                    <div>
                      <FaUserAlt className="text-slate-400" />
                      <input
                        type="text"
                        placeholder="Type your name"
                        {...register("name", { required: true })}
                      />
                    </div>
                  </div>
                  {errors.name?.type === "required" && (
                    <p role="alert" className="form-error">
                      Name is required
                    </p>
                  )}
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
                        {...register("password", {
                          required: true,
                          minLength: 6,
                          pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                        })}
                      />
                      <span
                        className="cursor-pointer"
                        onClick={() => setShowPass(!showPass)}
                      >
                        {showPass ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>
                  </div>
                  {errors.password?.type === "required" && (
                    <p role="alert" className="form-error">
                      Password is required
                    </p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p role="alert" className="text-red-600 font-bold py-2">
                      Password min length is 6
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p role="alert" className="text-red-600 font-bold py-2">
                      Password should contain 1 uppercase, one special
                      character-!@#$&*.
                    </p>
                  )}
                  <div className="cs-form-control">
                    <label htmlFor="password">Confirm Password</label>
                    <div>
                      <FaLock className="text-slate-400" />
                      <input
                        type={showPass ? "text" : "password"}
                        placeholder="Confirm Password"
                        {...register("confirmPassword", { required: true })}
                      />
                      <span
                        className="cursor-pointer"
                        onClick={() => setShowPass(!showPass)}
                      >
                        {showPass ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>
                  </div>
                  {errors.password?.type === "required" && (
                    <p role="alert" className="form-error">
                      Confirm Password is required
                    </p>
                  )}
                  <div className="cs-form-control">
                    <label htmlFor="photo">Photo URL</label>
                    <div>
                      <AiOutlineLink className="text-slate-400" />
                      <input
                        type="text"
                        placeholder="Type your Photo URL"
                        {...register("photoURL")}
                      />
                    </div>
                  </div>
                  {logInErr && <p className="form-error">Error : {logInErr}</p>}
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
