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
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ]
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        //Buyer Navigation route
        {
          path: "buyer",
          element: <BuyerHome />,
        },
        {
          path: "add",
          element: <AddTask></AddTask>,
        },
        {
          path: "task",
          element: <MyTask></MyTask>,
        },
        {
          path: "purchase",
          element: <div>purchase</div>,
        },
        {
          path: "history",
          element: <History></History>,
        },
        // Worker Navigation route
        {
          path: "worker",
          element: <WorkerHome></WorkerHome>,
        },
        {
          path: "tasklist",
          element: <TaskList></TaskList>,
        },
        {
          path: "submissions",
          element: <div>submissions</div>,
        },
        {
          path: "withdrawals",
          element: <div>withdrawals</div>,
        },

        // Admin Navigation route
        {
          path: "admin",
          element: <div>admin</div>,
        },
        {
          path: "users",
          element: <div>users</div>,
        },
        {
          path: "managetask",
          element: <div>managetask</div>,
        },

      ]
    },
  ])

  export default router;