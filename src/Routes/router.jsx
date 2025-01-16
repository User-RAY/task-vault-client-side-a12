import {
    createBrowserRouter,
  } from "react-router-dom";
import Basic from "../Layout/Basic";
import Home from "../Pages/Home/Home";

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
      ]
    },
  ])

  export default router;