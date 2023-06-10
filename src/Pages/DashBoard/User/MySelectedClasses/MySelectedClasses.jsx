import { useQuery } from "@tanstack/react-query";
import { baseUrl, useAxiosSecure } from "../../../../Hooks/useAxiosSecure";
import { useAuth } from "../../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const MySelectedClasses = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const navigate = useNavigate();
  const { data: selectedClasses = [], refetch: refetchSelectedClasses } =
    useQuery(["selected-classes"], async () => {
      const res = await axiosSecure.get(
        `/selected-classes?email=${user?.email}`
      );
      return res.data;
    });
  const handlePaymentRoute = (classId, itemId) => {
    fetch(`${baseUrl}class-available-or-not?id=${classId}`)
      .then(res => res.json())
      .then(data => {
        if (data.status) {
          navigate(`/dashboard/payment/${itemId}`);
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No class available.",
            footer: "All the class have been booked.",
          });
        }
      })
      .catch(err => console.log(err));
  };
  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(result => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/delete-selected-item?email=${user.email}&&id=${id}`)
          .then(res => {
            if (res.data.acknowledged) {
              refetchSelectedClasses();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="p-2 md:p-10">
      <h2 className="role-route-title">Selected classes</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="font-poppins font-semibold text-base">
            {selectedClasses.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.nameOfClass}</td>
                <td>{item.price}</td>
                <td>
                  <button
                    className="cs-gradient-btn"
                    onClick={() => handlePaymentRoute(item.classId, item._id)}
                  >
                    Pay
                  </button>
                  <button
                    className="btn btn-error ml-5"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClasses;
