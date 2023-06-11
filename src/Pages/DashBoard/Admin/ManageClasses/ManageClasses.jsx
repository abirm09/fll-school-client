import { useState } from "react";
import { useAxiosSecure } from "../../../../Hooks/useAxiosSecure";
import useClasses from "../../../../Hooks/useClasses";

const ManageClasses = () => {
  const { classes, refetch, isLoading } = useClasses();
  const [selectedForFeedback, setSelectedForFeedback] = useState("");
  const [successfulMessage, setSuccessfulMessage] = useState("");
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
  const handleFeedback = event => {
    event.preventDefault();
    const feedback = event.target.feedback.value;
    axiosSecure
      .post(`/post-feedback`, { feedback, id: selectedForFeedback })
      .then(res => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          event.target.reset();
          setSuccessfulMessage("Feedback sended successfully.");
        }
      })
      .catch(err => console.log(err));
  };
  const handleDeny = id => {
    axiosSecure
      .post(`/deny-a-post?id=${id}`)
      .then(() => {
        refetch();
      })
      .catch(err => console.log(err));
  };
  if (isLoading) {
    return (
      <div className="flex justify-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }
  return (
    <>
      <div className="p-2 md:p-5">
        <h2 className="role-route-title ">All classes</h2>
        <div>
          <div className="overflow-x-auto">
            <table className="table font-poppins">
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
                        disabled={
                          item.status === "approved" || item.status === "deny"
                        }
                      >
                        Approve
                      </button>
                      <button
                        className="btn btn-error btn-xs"
                        disabled={
                          item.status === "approved" || item.status === "deny"
                        }
                        onClick={() => handleDeny(item._id)}
                      >
                        Deny
                      </button>
                      <label
                        htmlFor="feedbackModal"
                        className="btn btn-warning btn-xs"
                        onClick={() => setSelectedForFeedback(item._id)}
                      >
                        Feedback
                      </label>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <input type="checkbox" id="feedbackModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Give your feedback</h3>
          <form className="mt-5" onSubmit={handleFeedback}>
            <textarea
              placeholder="Type your feedback"
              className="textarea textarea-bordered w-full"
              name="feedback"
            ></textarea>
            {successfulMessage && (
              <p className="font-bold text-success">{successfulMessage}</p>
            )}
            <input type="submit" value="Send" className="btn btn-info" />
          </form>
          <div className="modal-action">
            <label
              onClick={() => setSuccessfulMessage("")}
              htmlFor="feedbackModal"
              className="btn"
            >
              Close!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageClasses;
