import { useAuth } from "../../../Hooks/useAuth";

const WelcomePage = () => {
  const { user } = useAuth();
  const dateObj = new Date();
  const time = dateObj.getHours();
  let welcomeMessage = "";
  if (time >= 1 && time <= 5) {
    welcomeMessage = "Good evening.";
  } else if (time >= 6 && time <= 12) {
    welcomeMessage = "Good morning.";
  } else if (time >= 13 && time <= 19) {
    welcomeMessage = "Good Afternoon.";
  } else if (time >= 20 && time <= 1) {
    welcomeMessage = "Good evening.";
  }

  return (
    <div>
      <h2 className="text-center text-3xl ">Welcome, {user?.displayName}</h2>
      <p className="text-center">{welcomeMessage}</p>
    </div>
  );
};

export default WelcomePage;
