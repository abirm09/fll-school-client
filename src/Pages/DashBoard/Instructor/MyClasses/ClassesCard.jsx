import { AiOutlineEdit } from "react-icons/ai";
import Swal from "sweetalert2";

const ClassesCard = ({ classInfo }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-9 bg-base-200 p-3 rounded-lg shadow-md gap-2 items-center">
      <div>
        <img
          src={classInfo.classImage}
          className="rounded-md"
          alt={classInfo.className}
        />
      </div>
      <div className="col-span-1 md:col-span-2 font-poppins">
        <h2 className="font-semibold">{classInfo.className}</h2>
        <h3 className="text-xs">Total enrolled : {classInfo.bookedSeats}</h3>
      </div>
      <div className="col-span-1 md:col-span-4">{classInfo?.feedback}</div>
      <div className="col-span-1 md:col-span-2 flex items-center justify-center">
        <h2
          className={`${
            classInfo.status === "approved"
              ? "text-success"
              : classInfo.status == "pending"
              ? "text-warning"
              : "text-error"
          } capitalize font-bold select-none`}
        >
          {classInfo.status}
        </h2>
        <button
          className="btn btn-ghost"
          onClick={() => Swal.fire("Under development.")}
        >
          <AiOutlineEdit className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default ClassesCard;
