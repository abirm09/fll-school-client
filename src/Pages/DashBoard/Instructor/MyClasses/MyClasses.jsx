import { useQuery } from "@tanstack/react-query";
import { useAxiosSecure } from "../../../../Hooks/useAxiosSecure";
import ClassesCard from "./ClassesCard";

const MyClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: addedClasses = [] } = useQuery({
    queryKey: ["added-classes"],
    queryFn: async () => {
      const res = await axiosSecure.get("/added-classes");
      return res.data;
    },
  });
  // console.log(addedClasses);
  return (
    <div className="p-2 md:p-5">
      <h2 className="role-route-title">My added classes</h2>
      <div className="overflow-x-auto space-y-5 mt-10 p-5">
        {addedClasses.map(item => (
          <ClassesCard key={item._id} classInfo={item} />
        ))}
      </div>
    </div>
  );
};

export default MyClasses;
