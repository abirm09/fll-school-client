import { useAuth } from "../../../Hooks/useAuth";

const WelcomePage = () => {
  const { user } = useAuth();

  return (
    <div className="py-10">
      <h2 className="text-center text-3xl font-bold">
        Welcome, {user?.displayName}
      </h2>
    </div>
  );
};

export default WelcomePage;
