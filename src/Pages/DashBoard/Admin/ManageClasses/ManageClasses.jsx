import { useAxiosSecure } from "../../../../Hooks/useAxiosSecure";
import useClasses from "../../../../Hooks/useClasses";

const ManageClasses = () => {
  const { classes, refetch } = useClasses();
  console.log(classes);
  const [axiosSecure] = useAxiosSecure();
  const handleApprove = id => {
    axiosSecure
      .post(`/approve-a-class?id=${id}`)
      .then(res => {
        console.log(res.data);
        refetch();
      })
      .catch(err => console.log(err));
  };
  return (
    <div className="p-2 md:p-5">
      <h2 className="role-route-title ">All classes</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Class name</th>
                <th>Instructor name</th>
                <th>Instructor email</th>
                <th>
                  Available <br />
                  seats
                </th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={item.classImage}
                      alt={item.className}
                      className="w-20 rounded-md"
                    />
                  </td>
                  <td>{item.className}</td>
                  <td>{item.instructorName}</td>
                  <td>{item.instructorEmail}</td>
                  <td>{item.totalSeats - item.bookedSeats}</td>
                  <td className="capitalize ">{item.status}</td>
                  <td className="flex flex-col gap-2">
                    <button
                      className="btn btn-success btn-xs"
                      onClick={() => handleApprove(item._id)}
                      disabled={item.status === "approved"}
                    >
                      Approve
                    </button>
                    <button
                      className="btn btn-error btn-xs"
                      disabled={item.status === "approved"}
                    >
                      Deny
                    </button>
                    <button className="btn btn-warning btn-xs">Feedback</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageClasses;
