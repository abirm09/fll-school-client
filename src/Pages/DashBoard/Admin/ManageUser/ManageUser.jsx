import { useQuery } from "@tanstack/react-query";
import { useAxiosSecure } from "../../../../Hooks/useAxiosSecure";

const ManageUser = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["all-users"],
    queryFn: async () => {
      const res = await axiosSecure.get("user-all");
      return res.data;
    },
  });
  const changeRole = (id, role) => {
    axiosSecure
      .post(`/change-user-role?id=${id}&&role=${role}`)
      .then(() => {
        refetch();
      })
      .catch(err => console.log(err));
  };
  return (
    <div className="p-2 md:p-5 overflow-auto">
      <h2 className="role-route-title ">Mange users</h2>
      <div className="mt-5">
        <div className="overflow-x-auto">
          <table className="table font-poppins">
            <thead>
              <tr className="text-xl">
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={user.image}
                      alt={user.name}
                      className="w-16 rounded-full"
                    />
                  </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td className="font-bold capitalize">
                    {user.role === "admin" || user.role === "instructor" ? (
                      user.role === "admin" ? (
                        <span className="text-red-500">Admin</span>
                      ) : (
                        <span className="text-green-600">Instructor</span>
                      )
                    ) : (
                      <span className="text-warning">Student</span>
                    )}
                  </td>
                  <td className="flex flex-col gap-3">
                    <button
                      className="btn btn-xs btn-error"
                      onClick={() => changeRole(user._id, "admin")}
                      disabled={user.role == "admin"}
                    >
                      Make admin
                    </button>
                    <button
                      className="btn btn-xs btn-success"
                      disabled={user.role == "instructor"}
                      onClick={() => changeRole(user._id, "instructor")}
                    >
                      Make instructor
                    </button>
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

export default ManageUser;
