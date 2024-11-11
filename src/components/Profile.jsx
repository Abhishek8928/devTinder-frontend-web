import React from 'react'; 


import EditProfile from './EditProfile'
import { Link, Outlet } from 'react-router-dom';

function Profile() {
  

  return (

    <div className='py-[10vh] flex '>

      <div className='left-part w-1/5 '>


        <h2 className='text-[#afafaf] text-[1.2vw] mb-[2vw] tracking-wide font-satoshi'>Account Center</h2>

        <p>


          <Link to="/profile" className="active  p-[0.6vw] text-white text-base  flex gap-2 items-center">
            <i className="ri-user-line"></i> <span className='text-sm'>Personal Details</span>
          </Link>
          <Link to="/profile/connection" className="active text-zinc-400  p-[0.8vw]  text-base  flex gap-2 items-center">
            <i className="ri-rfid-line"></i> <span className='text-sm'>Connection</span>
          </Link>
          <Link to="/profile/request" className="active  p-[0.8vw] text-zinc-400  text-base  flex gap-2 items-center">
            <i className="ri-mail-line"></i> <span className='text-sm'>Request Received</span>
          </Link>
        </p>
      </div>

      <Outlet />




    </div>
  )
}

export default Profile