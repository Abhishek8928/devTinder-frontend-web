import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  // i am only subscribed to small part of my redux store that is user slice
  const user = useSelector((store) => store.user);

  return (
    <div className="py-[4vh] px-[4vw] w-full flex ">
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
          </>
        ) : (
          <>
          <li>
            <Link to="/login" className="text-white text-sm" href="">
              Login
            </Link>
          </li>
          <li>
            <Link to="/profile" className="text-white text-sm" href="">
              profile
            </Link>
          </li>
          
          </>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
