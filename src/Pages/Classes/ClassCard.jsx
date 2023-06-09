import Swal from "sweetalert2";
import { useAuth } from "../../Hooks/useAuth";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";

const ClassCard = ({ item, role }) => {
  const { darkTheme, user } = useAuth();
  const { _id, classImage, instructorName, totalSeats, bookedSeats, price } =
    item;
  const [axiosSecure] = useAxiosSecure();
  const navigate = useNavigate();
  const handleSelect = id => {
    if (!user) {
      Swal.fire({
        title: "Please log in first.",
        text: "Go to log in page.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then(result => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
      return;
    }
    const studentInfo = {
      studentName: user.displayName,
      studentEmail: user?.email,
      classId: id,
      nameOfClass: item.className,
      price,
    };
    axiosSecure
      .post("/select-item", studentInfo)
      .then(res => {
        if (res.data.acknowledged) {
          Swal.fire("success!", "Selected successfully!", "success");
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You have already enrolled this class.",
            footer: "Thank You.",
          });
        }
      })
      .catch(err => console.log(err));
  };
  return (
    <div
      className={`${
        totalSeats - bookedSeats <= 0 ? "bg-red-500" : "bg-base-100"
      } w-80 shadow-lg ${
        darkTheme ? "shadow-slate-900" : "shadow-slate-300"
      } rounded-lg`}
    >
      <img src={classImage} alt={item.className} className="rounded-t-lg" />
      <div className="p-7 space-y-2 font-poppins">
        <h4 className="text-2xl font-bold cs-text-gradient ">
          {item.className}
        </h4>
        <h4 className="font-semibold">Instructor : {instructorName}</h4>
        <p className="text-sm">Available seats : {totalSeats - bookedSeats}</p>
        <p className="text-xl font-bold">Price : ${price}</p>
        <div>
          <button
            onClick={() => handleSelect(_id)}
            className="btn btn-primary"
            disabled={
              role == "admin" ||
              role == "instructor" ||
              totalSeats - bookedSeats <= 0
                ? true
                : false
            }
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
