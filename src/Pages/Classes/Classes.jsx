import { useEffect, useState } from "react";
import { baseUrl } from "../../Hooks/useAxiosSecure";
import ClassCard from "./classCard";
import { useRole } from "../../Hooks/useRole";
const Classes = () => {
  const [classes, setClasses] = useState([]);
  const role = useRole();
  console.log(role);
  const url = baseUrl;
  useEffect(() => {
    fetch(`${url}classes-all`)
      .then(res => res.json())
      .then(data => setClasses(data));
  }, [url]);
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
