import { useAuth } from "../../../Hooks/useAuth";

const WelcomePage = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2 className="text-center text-3xl ">Welcome, {user?.displayName}</h2>
    </div>
  );
};

export default WelcomePage;
