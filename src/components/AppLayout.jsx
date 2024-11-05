import "../index.css";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
function AppLayout() {
  return (
    <>
      <div className="w-full  h-screen">
        <Navbar/>
        {/* outlet will be filled  with the component according to the path */}
        <Outlet />
      </div>
    </>
  );
}

export default AppLayout;
