import { useAuth } from "../../../Hooks/useAuth";

const PopularClassesCard = ({ classDetail }) => {
  const { darkTheme } = useAuth();
  return (
    <div
      className={`bg-base-100 shadow-lg ${
        darkTheme ? "shadow-slate-900" : "shadow-slate-300"
      } max-w-[350px] w-full p-3 rounded-lg space-y-2 font-poppins `}
    >
      <img
        src={classDetail.classImage}
        alt={classDetail.className}
        className="rounded-lg"
      />
      <h2 className="font-bold text-xl pt-5 block">{classDetail.className}</h2>
      <p className="font-semibold">Instructor : {classDetail.instructorName}</p>
      <p>Available seat : {classDetail.totalSeats - classDetail.bookedSeats}</p>
      <p>Price : ${classDetail.price}</p>
    </div>
  );
};

export default PopularClassesCard;
