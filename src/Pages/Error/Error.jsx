import Lottie from "lottie-react";
import error404 from "../../assets/error/error-404.json";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="cs-container">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center min-h-screen">
        <div className="font-bold space-y-5">
          <h2 className="text-5xl">404 page not found</h2>
          <h3>Something went wrong.</h3>
          <Link to="/" className="block">
            <button className="btn btn-primary btn-sm">Back to home</button>
          </Link>
        </div>
        <div>
          <Lottie animationData={error404} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Error;
