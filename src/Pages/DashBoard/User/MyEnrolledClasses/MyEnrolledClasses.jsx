import useEnrolledClasses from "../../../../Hooks/useEnrolledClasses";

const MyEnrolledClasses = () => {
  const { enrolledClasses } = useEnrolledClasses();
  return (
    <div className="p-2 md:p-5">
      <h2 className="role-route-title ">Your enrolled classes</h2>
      <div>
        <h2 className="font-poppins mt-3 font-bold">
          Total enrolled classes : {enrolledClasses.length}
        </h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Price</th>
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
