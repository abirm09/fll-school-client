import ClassCard from "./classCard";
import { useRole } from "../../Hooks/useRole";
import useClasses from "../../Hooks/useClasses";
const Classes = () => {
  const { role, isRoleLoading } = useRole();
  const { classes } = useClasses();
  if (isRoleLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <section>
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
