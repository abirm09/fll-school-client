import ClassCard from "./classCard";
import { useRole } from "../../Hooks/useRole";
import { useQuery } from "@tanstack/react-query";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
const Classes = () => {
  const { role, isRoleLoading } = useRole();
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [] } = useQuery({
    queryKey: ["classes-approved"],
    queryFn: async () => {
      const res = await axiosSecure.get("/classes-all-approved");
      return res.data;
    },
  });
  if (isRoleLoading) {
    return (
      <div className="flex justify-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }
  return (
    <section className="mt-10">
      <div className="cs-container">
        <div className="flex justify-center flex-wrap gap-10">
          {classes.map(item => (
            <ClassCard key={item._id} item={item} role={role} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
