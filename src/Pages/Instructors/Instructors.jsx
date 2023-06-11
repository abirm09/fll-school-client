import { useQuery } from "@tanstack/react-query";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const Instructors = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: instructors = [] } = useQuery(["instructors"], async () => {
    const res = await axiosSecure.get("/instructor");
    return res.data;
  });
  return (
    <section className="mt-10">
      <div className="cs-container">
        <SectionTitle title="Our instructors"></SectionTitle>
        <div className="overflow-x-auto">
          <table className="table table-zebra font-poppins font-semibold">
            {/* head */}
            <thead>
              <tr className="text-base">
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody className="text-base">
              {instructors.map((instructor, index) => (
                <tr key={instructor._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-16 h-16 rounded-full"
                    />
                  </td>
                  <td>{instructor.name}</td>
                  <td>{instructor.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Instructors;
