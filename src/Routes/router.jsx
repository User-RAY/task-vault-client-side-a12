import {
    createBrowserRouter,
  } from "react-router-dom";
import Basic from "../Layout/Basic";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import BuyerHome from "../Pages/BuyerHome/BuyerHome";

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
          element: <div>add</div>,
        },
        {
          path: "task",
          element: <div>task</div>,
        },
        {
          path: "purchase",
          element: <div>purchase</div>,
        },
        {
          path: "history",
          element: <div>history</div>,
        },
        // Worker Navigation route
        {
          path: "worker",
          element: <div>worker</div>,
        },
        {
          path: "tasklist",
          element: <div>tasklist</div>,
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