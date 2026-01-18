import { Outlet } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Loginpage from "./pages/LoginPage";
import DashRouter from "./pages/Dash-compound/DashRouter";
import Users from "./pages/DashPages/User";

// Layout Router
const Router = () => {
  return <Outlet />;
};

export default Router;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Router />,
    children: [
      {
        index: true,
        element: <Loginpage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashRouter />,
    children: [
      {
        path: "user", 
        element: <Users />,
      },
    ],
  },
]);
