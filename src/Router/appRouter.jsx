import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import Index from "../components/Index";
import Connection from "../components/Connection";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Feed from "../components/Feed";
import Profile from "../components/Profile";
import Notification from "../components/Notification";
import EditProfile from "../components/EditProfile";
import Request from "../components/Request";
import ConnectionProfile from "../components/ConnectionProfile";

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
        children: [
          {
            path: "/feed/notification",
            element:<Notification />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: "",
      },
      {
        path: "/connection",
        element: <Connection />,
      },
      {
        path: "/profile",
        element: <Profile />,
        children:[
          {
            path: "/profile/connection",
            element:<Connection/>,
            children:[
              {
                path:"/profile/connection/:userId",
                element:<ConnectionProfile />
              }
            ]
          },
          {
            path: "/profile",
            element:<EditProfile />,
          },
          {
            path: "/profile/request",
            element:<Request />,
          }
        ]
      },
      {
        path: "*",
        element: <h1>not found any child route</h1>,
      },
    ],
  },
]);

export default appRouter;
