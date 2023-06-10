import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Home from "../../Pages/Home/Home/Home";
import Error from "../../Pages/Error/Error";
import Instructors from "../../Pages/Instructors/Instructors";
import Classes from "../../Pages/Classes/Classes";
import Login from "../../Components/Login/Login";
import Register from "../../Components/Register/Register";
import Dashboard from "../../Layouts/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import WelcomePage from "../../Pages/DashBoard/WelcomePage/WelcomePage";
import MySelectedClasses from "../../Pages/DashBoard/User/MySelectedClasses/MySelectedClasses";
import MyEnrolledClasses from "../../Pages/DashBoard/User/MyEnrolledClasses/MyEnrolledClasses";
import PaymentHistory from "../../Pages/DashBoard/User/PaymentHistory/PaymentHistory";
import AddClass from "../../Pages/DashBoard/Instructor/AddClass/AddClass";
import MyClasses from "../../Pages/DashBoard/Instructor/MyClasses/MyClasses";
import InstructorRoute from "../InstructorRoute/InstructorRoute";
import Payment from "../../Pages/DashBoard/User/Payment/Payment";
import ManageClasses from "../../Pages/DashBoard/Admin/ManageClasses/ManageClasses";
import ManageUser from "../../Pages/DashBoard/Admin/ManageUser/ManageUser";
import AdminRoute from "../AdminRoute/AdminRoute";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/instructors",
        element: <Instructors />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/home",
        element: <WelcomePage />,
      },
      {
        path: "/dashboard/my-selected-classes",
        element: <MySelectedClasses />,
      },
      {
        path: "/dashboard/my-enrolled-classes",
        element: <MyEnrolledClasses />,
      },
      {
        path: "/dashboard/payment-history",
        element: <PaymentHistory />,
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment />,
      },
      // instructors
      {
        path: "/dashboard/add-class",
        element: (
          <InstructorRoute>
            <AddClass />
          </InstructorRoute>
        ),
      },
      {
        path: "/dashboard/my-classes",
        element: (
          <InstructorRoute>
            <MyClasses />
          </InstructorRoute>
        ),
      },
      //admin
      {
        path: "/dashboard/manage-classes",
        element: (
          <AdminRoute>
            <ManageClasses />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manage-users",
        element: <ManageUser />,
      },
    ],
  },
]);

export default route;
