import { useQuery } from "@tanstack/react-query";
import { useAxiosSecure } from "../../../Hooks/useAxiosSecure";
const PopularClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes-limit");
    return res.data;
  });
  console.log(classes);
  return (
    <div>
      <h2>from popular classes</h2>
    </div>
  );
};

export default PopularClasses;
