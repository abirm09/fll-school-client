import { useAuth } from "../../Hooks/useAuth";

const Classes = () => {
  const { name } = useAuth();
  console.log(name);
  return (
    <div>
      <h1>from classes</h1>
    </div>
  );
};

export default Classes;
