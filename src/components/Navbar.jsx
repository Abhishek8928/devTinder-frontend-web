import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../Utils/axiosInstances";
import { removeFeed } from "../Utils/redux/feed";
import { logoutUser } from "../Utils/redux/user";


function Navbar() {
  // i am only subscribed to small part of my redux store that is user slice
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatchHandler = useDispatch();


  async function logoutHandler(){
    try{
      await axiosInstance.post('/api/v1/logout');
      dispatchHandler(removeFeed())
      dispatchHandler(logoutUser())
      navigate('/login');
    }catch(err){
      console.log(err);
    }


  }

  return (
    <div className=" w-full flex ">
      <p className="text-[#F8F8F8]  w-full  leading-none text-sm ">
        <span className="text-hackathoneGreen">devTinder </span>
        - for developer match
        <br />
        <span className="text-hackathoneGreen">meet new people</span>
      </p>

      <ul className="flex gap-4 items-center">
        {user ? (
          <>
            <li>
              <Link className="text-white text-sm" to="/feed/notification">
                Notification
              </Link>
            </li>
            
            <li className="flex-shrink-0">
              <Link to="/profile">
                <img
                  className="w-8 h-8 object-cover rounded-full"
                  src={user?.photoUrl}
                  alt=""
                />
              </Link>
            </li>
            <li onClick={logoutHandler} className="flex-shrink-0 text-sm text-red-600 cursor-pointer">
             Logout
            </li>
          </>
        ) : (
          <>
          <li>
            <Link to="/login" className="text-white text-sm" href="">
              Login
            </Link>
          </li>
          
          
          </>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
