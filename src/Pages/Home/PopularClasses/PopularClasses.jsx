import { useQuery } from "@tanstack/react-query";
import { useAxiosSecure } from "../../../Hooks/useAxiosSecure";
import PopularClassesCard from "./PopularClassesCard";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
const PopularClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [] } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes-limit");
    return res.data;
  });
  return (
    <section className="pt-20">
      <div className="cs-container">
        <SectionTitle
          title="Trending now"
          subTitle="Top 6 classes base on the number of students."
        />
        <div className="flex justify-center gap-5 flex-wrap">
          {classes.map(classDetail => (
            <PopularClassesCard
              key={classDetail._id}
              classDetail={classDetail}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularClasses;
