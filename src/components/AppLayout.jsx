import "../index.css";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axiosInstance from "../Utils/axiosInstances";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentUser, logoutUser } from "../Utils/redux/user";

function AppLayout() {
  const dispatchHandler = useDispatch();
  const navigateHandler = useNavigate();
  const location = useLocation();

  const user = useSelector((store) => store.user);

  const getUserProfile = async () => {
    try {
      const response = await axiosInstance.get("/api/v1/profile/view");
      dispatchHandler(addCurrentUser(response?.data?.data));
    } catch (err) {
      if (err.status === 401) {
        navigateHandler("/login");
        dispatchHandler(logoutUser());
      }
    }
  };

  useEffect(() => {
    if (!user) {
      getUserProfile();
    }
  }, [location.pathname]);

  return (
    <>
      <div className="w-full py-[4vh] px-[4vw] bg-[#050505]  h-screen">
        <Navbar />
        {/* outlet will be filled  with the component according to the path */}
        <Outlet />
      </div>
    </>
  );
}

export default AppLayout;
