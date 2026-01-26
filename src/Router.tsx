import { Outlet } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Loginpage from "./pages/LoginPage";
import DashRouter from "./pages/Dash-compound/DashRouter";
import Users from "./pages/DashPages/User";
import NewUser from "./pages/DashPages/NewUser";
import GetOneUser from "./pages/DashPages/GetOneUser";
import ApdateUser from "./pages/DashPages/ApdateUser";


// Layout Router
const RouterLayout = () => {
  return <Outlet />;
};

export default RouterLayout;
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterLayout />,
    children: [
      {
        index: true,
        element: <Loginpage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashRouter />, // ⚠️ DashRouter waa parent
    children: [
      {
        path: "user",  
        children : [    
          {
            index : true,
            element : <Users />
          },
          {
            path : "new",
            element : <NewUser />
          },
          {
            path:"one/:id",
            element:<GetOneUser/>
          },

          {

             path : 'Apdate/:id',
             element : <ApdateUser/>
     
          }
          
        ]
      }
      
    ],
  },
]);
