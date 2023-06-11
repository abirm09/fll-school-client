import useEnrolledClasses from "../../../../Hooks/useEnrolledClasses";

const PaymentHistory = () => {
  const { enrolledClasses } = useEnrolledClasses();
  return (
    <div className="p-2 md:p-5 w-full overflow-x-hidden">
      <h2 className="role-route-title ">Your payment history</h2>
      <div className="overflow-x-auto w-full">
        <table className="table table-zebra font-poppins">
          {/* head */}
          <thead>
            <tr className="text-xl">
              <th></th>
              <th>Class name</th>
              <th>txId</th>
              <th>Date</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {enrolledClasses.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.nameOfClass}</td>
                <td>{item.txID}</td>
                <td>{item.time.split("T")[0]}</td>
                <td>${item.price}</td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td colSpan="4">
                Total : $
                {enrolledClasses.reduce((sum, item) => sum + item.price, 0)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
