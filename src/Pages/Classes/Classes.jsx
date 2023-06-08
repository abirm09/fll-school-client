import { useEffect, useState } from "react";
import { baseUrl } from "../../Hooks/useAxiosSecure";
import ClassCard from "./classCard";

const Classes = () => {
  const [classes, setClasses] = useState([]);

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
            <ClassCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
