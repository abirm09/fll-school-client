import { useAuth } from "../../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { useAxiosSecure } from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddClass = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = data => {
    data.totalSeats = parseFloat(data.totalSeats);
    data.price = parseFloat(data.price);
    axiosSecure
      .post("/add-new-class", data)
      .then(res => {
        console.log(res.data);
        if (res.data.acknowledged) {
          Swal.fire(
            "success!",
            "Class added success fully. Pending for admin approval.",
            "success"
          );
          reset();
        }
      })
      .catch(err => console.log(err));
    console.log(data);
  };
  return (
    <div className="p-2 md:p-5">
      <h2 className="role-route-title">Add a new class</h2>
      <form className="space-y-5 pt-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="add-class-form">
          <div className="">
            <input
              type="text"
              placeholder="Class name"
              className="input input-bordered w-full"
              {...register("className", { required: true })}
            />
            {errors.className?.type === "required" && (
              <p className="form-error" role="alert">
                First name is required
              </p>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Class photo url"
              className="input input-bordered w-full"
              {...register("classImage", { required: true })}
            />
            {errors.classImage?.type === "required" && (
              <p className="form-error" role="alert">
                First name is required
              </p>
            )}
          </div>
        </div>
        <div className="add-class-form">
          <div>
            <input
              type="text"
              placeholder="Instructor name"
              className="input input-bordered w-full"
              readOnly
              defaultValue={user?.displayName}
              {...register("instructorName")}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
              readOnly
              defaultValue={user?.email}
              {...register("instructorEmail")}
            />
          </div>
        </div>
        <div className="add-class-form">
          <div>
            <input
              type="text"
              placeholder="Instructor image"
              className="input input-bordered w-full"
              defaultValue={user?.photoURL}
              {...register("instructorImage", { required: true })}
            />
            {errors.instructorImage?.type === "required" && (
              <p className="form-error" role="alert">
                First name is required
              </p>
            )}
          </div>
        </div>
        <div className="add-class-form">
          <div>
            <input
              type="text"
              placeholder="Total seats"
              className="input input-bordered w-full"
              {...register("totalSeats", { required: true })}
            />
            {errors.totalSeats?.type === "required" && (
              <p className="form-error" role="alert">
                First name is required
              </p>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Price"
              className="input input-bordered w-full"
              {...register("price", { required: true })}
            />
            {errors.price?.type === "required" && (
              <p className="form-error" role="alert">
                First name is required
              </p>
            )}
          </div>
        </div>
        <input
          type="submit"
          className="cs-gradient-btn w-full"
          value="Add class"
        />
      </form>
    </div>
  );
};

export default AddClass;
