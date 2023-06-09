import { useQuery } from "@tanstack/react-query";
import { useAxiosSecure } from "../../../../Hooks/useAxiosSecure";
import { useAuth } from "../../../../Hooks/useAuth";

const MyEnrolledClasses = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: enrolledClasses = [] } = useQuery({
    queryKey: ["enrolled-classes"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/enrolled-classes?email=${user?.email}`
      );
      return res.data;
    },
  });
  console.log(enrolledClasses);
  return (
    <div className="p-2 md:p-5">
      <h2 className="role-route-title ">Your enrolled classes</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Price</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {enrolledClasses.map((item, index) => (
                <tr key={item._id} className="font-poppins font-semibold">
                  <td>{index + 1}</td>
                  <td>{item.nameOfClass}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyEnrolledClasses;
