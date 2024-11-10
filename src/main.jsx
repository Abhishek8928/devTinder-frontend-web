import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppLayout from "./components/AppLayout.jsx";
import appRouter from "./Router/appRouter.jsx";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/Utils/redux/store.js"

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
);
