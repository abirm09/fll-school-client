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
    ],
  },
]);

export default route;
