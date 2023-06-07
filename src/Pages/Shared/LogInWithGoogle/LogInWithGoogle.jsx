import { useAuth } from "../../../Hooks/useAuth";

const LogInWithGoogle = () => {
  const { googleLogin, user } = useAuth();
  console.log(user);
  const handleGoogleLogin = () => {
    googleLogin()
      .then(res => console.log(res.user))
      .catch(err => console.log(err));
  };
  return (
    <div className="flex justify-center max-w-sm mx-auto">
      <button
        className="btn btn-ghost normal-case flex w-full"
        style={{ border: "2px solid lightgray" }}
        onClick={handleGoogleLogin}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
          alt="Google"
          className="w-8"
        />
        <span className="flex-1">Continue with google</span>
      </button>
    </div>
  );
};

export default LogInWithGoogle;
