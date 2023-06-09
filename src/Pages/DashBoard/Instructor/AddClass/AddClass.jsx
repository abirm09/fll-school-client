import { useAuth } from "../../../../Hooks/useAuth";

const AddClass = () => {
  const { user } = useAuth();
  return (
    <div className="p-2 md:p-5">
      <form className="space-y-5">
        <div className="add-class-form">
          <input
            type="text"
            placeholder="Class name"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Class photo url"
            className="input input-bordered w-full"
          />
        </div>
        <div className="add-class-form">
          <input
            type="text"
            placeholder="Instructor name"
            className="input input-bordered w-full"
            readOnly
            defaultValue={user?.displayName}
          />
          <input
            type="email"
            placeholder="Class photo url"
            className="input input-bordered w-full"
            readOnly
            defaultValue={user?.email}
          />
        </div>
        <div className="add-class-form">
          <input
            type="text"
            placeholder="Available seats"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Price"
            className="input input-bordered w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default AddClass;
