import {
    createBrowserRouter,
  } from "react-router-dom";
import Basic from "../Layout/Basic";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import BuyerHome from "../Pages/BuyerHome/BuyerHome";
import AddTask from "../Pages/AddTask/AddTask";
import MyTask from "../Pages/MyTask/MyTask";
import History from "../Pages/History/History";
import WorkerHome from "../Pages/WorkerHome/WorkerHome";
import TaskList from "../Pages/TaskList/TaskList";
import MySubmissions from "../Pages/MySubmissions/MySubmissions";
import Withdraw from "../Pages/Withdraw/Withdraw";
import AdminHome from "../Pages/AdminHome/AdminHome";
import ManageUser from "../Pages/ManageUser/ManageUser";
import ManageTask from "../Pages/ManageTask/ManageTask";
import PrivateRoute from "./PrivateRoute";
import TaskDetails from "../Pages/TaskDetails/TaskDetails";
import LogRoute from "./LogRoute";
import WorkerRoute from "./WorkerRoute";
import BuyerRoute from "./BuyerRoute";
import AdminRoute from "./AdminRoute";
import Purchase from "../Pages/Purchase/Purchase";
import CoinInfo from "../Pages/CoinInfo/CoinInfo";
import Profile from "../Pages/Profile/Profile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Basic></Basic>,
      errorElement: <div>Error page</div>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <LogRoute><Login /></LogRoute>,
        },
        {
          path: "/register",
          element: <LogRoute> <Register /> </LogRoute>,
        },
      ]
    },
    {
      path: "/dashboard",
      element: <PrivateRoute><Dashboard /></PrivateRoute>,
      children: [
        //Buyer Navigation route
        {
          path: "buyer",
          element: <BuyerRoute><BuyerHome /></BuyerRoute>,
        },
        {
          path: "add",
          element: <BuyerRoute><AddTask></AddTask></BuyerRoute>,
        },
        {
          path: "task",
          element: <BuyerRoute><MyTask></MyTask></BuyerRoute>,
        },
        {
          path: "purchase",
          element: <BuyerRoute><CoinInfo></CoinInfo></BuyerRoute>,
        },
        {
          path: "pay",
          element: <BuyerRoute><Purchase></Purchase></BuyerRoute>,
        },
        {
          path: "history",
          element: <BuyerRoute><History></History></BuyerRoute>,
        },
        // Worker Navigation route
        {
          path: "worker",
          element: <WorkerRoute><WorkerHome></WorkerHome></WorkerRoute>,
        },
        {
          path: "tasklist",
          element: <WorkerRoute><TaskList></TaskList></WorkerRoute>,
        },
        {
          path: "submissions",
          element: <WorkerRoute><MySubmissions></MySubmissions></WorkerRoute>,
        },
        {
          path: "withdrawals",
          element: <WorkerRoute><Withdraw></Withdraw></WorkerRoute>,
        },
        {
          path: "details/:id",
          element: <WorkerRoute><TaskDetails></TaskDetails></WorkerRoute>,
        },

        // Admin Navigation route
        {
          path: "admin",
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>,
        },
        {
          path: "users",
          element: <AdminRoute><ManageUser></ManageUser></AdminRoute>,
        },
        {
          path: "managetask",
          element: <AdminRoute><ManageTask></ManageTask></AdminRoute>,
        },
        {
          path: "buyerprofile",
          element: <BuyerRoute><Profile></Profile></BuyerRoute>,
        },
        {
          path: "workerprofile",
          element: <WorkerRoute><Profile></Profile></WorkerRoute>,
        },
        {
          path: "adminprofile",
          element: <AdminRoute><Profile></Profile></AdminRoute>,
        },

      ]
    },
  ])

  export default router;