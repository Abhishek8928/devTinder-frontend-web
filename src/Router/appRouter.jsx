import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import Index from "../components/Index";
import Connection from "../components/Connection";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Feed from "../components/Feed";

// create a configuration for browser router to render the stuff accordding to path -> sap(single page application)
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/feed",
        element: <Feed />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/connection",
        element: <Connection />,
      },
    ],
  },
]);

export default appRouter;
