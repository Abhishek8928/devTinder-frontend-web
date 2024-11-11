import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../Utils/axiosInstances';
import { addCurrentUser } from '../Utils/redux/user';



function EditProfile(){

    const user = useSelector(state => state.user);
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const dispatchHandler = useDispatch();
  const [updateProfile, setUpdateProfile] = useState(user || {});

  useEffect(() => {
    if (user) {
      const { emailId, updatedAt, __v, createdAt, _id, username, hashPassword, matches, notifications, ...restField } = user;
      setUpdateProfile(restField);

    }
  }, [user]);



  async function onSubmitHandler(event) {
    try {
      event.preventDefault();
      const response = await axiosInstance.patch('/api/v1/profile/edit', updateProfile);
      dispatchHandler(addCurrentUser(response?.data?.data));
      setSuccessMsg(response?.data?.message || "Updated Profile");
      setTimeout(() => {
        setSuccessMsg("")
      }, 3000)
    } catch (err) {
      
      const errText = err?.response?.data?.message || err.message || err?.response?.data?.statusText;
      setErrMsg(errText);

      setTimeout(() => {
        setErrMsg("")
      }, 3000)
    }

  }

    return(
        <div className="right-part w-4/5 pb-[10vh]    relative">


        <div className="profile-top flex gap-[1vw] relative items-center">

          <img className='w-[6vw] h-[6vw] object-cover rounded-full' src={updateProfile?.photoUrl} alt="" />

          <div className="user-info leading-none ">

            <h2 className='text-white'>{user?.firstName + " " + user?.lastName}</h2>
            <small className='text-[#afafaf] text-xs'>{user?.emailId}</small>

          </div>

          {
            errMsg && <small className='text-red-600 text-xs absolute top-1/2 right-0 py-2 px-4 rounded-md bg-red-300'>{errMsg}</small>
          }
          {
            successMsg && <small className='text-green-800 text-xs absolute top-1/2 right-0 py-2 px-4 rounded-md bg-green-300'>{successMsg}</small>
          }


        </div>


        <form action="" onSubmit={onSubmitHandler} className='mt-[4vh]'>


          <div className="form-controls-wrapper mb-4 w-full flex gap-[1vw] ">
            <div className="form-controls w-1/3">
              <label className='block text-zinc-400 text-xs pb-2' htmlFor="">FirstName</label>
              <input
                type="text"
                value={updateProfile?.firstName}
                onChange={(e) => {
                  return setUpdateProfile({ ...updateProfile, firstName: e.target.value })
                }}
                className="p-2.5 text-sm w-full   bg-primaryDark text-white rounded-md border-none"
              />

            </div>

            <div className="form-controls w-1/3">
              <label className='block text-zinc-400 text-xs pb-2' htmlFor="">lastName</label>
              <input
                type="text"
                value={updateProfile?.lastName}
                onChange={(e) => {
                  return setUpdateProfile({ ...updateProfile, lastName: e.target.value })
                }}
                className="p-2.5 text-sm w-full   bg-primaryDark text-white rounded-md border-none"
              />

            </div>

            <div className="form-controls w-1/3">
              <label className='block text-zinc-400 text-xs pb-2' htmlFor="">Gender</label>
              <input
                type="text"
                value={updateProfile?.gender}
                onChange={(e) => {
                  return setUpdateProfile({ ...updateProfile, gender: e.target.value })
                }}
                className="p-2.5 text-sm w-full   bg-primaryDark text-white rounded-md border-none"
              />

            </div>


          </div>


          <div className="form-controls-wrapper w-full mb-4 flex gap-[1vw] ">
            <div className="form-controls w-1/3">
              <label className='block text-zinc-400 text-xs pb-2' htmlFor="">Skills</label>
              <input
                type="text"
                value={updateProfile?.skills?.join(",")}
                onChange={(e) => {
                  return setUpdateProfile({ ...updateProfile, skills: e?.target?.value?.split(",") })
                }}
                className="p-2.5 text-sm w-full   bg-primaryDark text-white rounded-md border-none"
              />

            </div>

            <div className="form-controls w-1/3">
              <label className='block text-zinc-400 text-xs pb-2' htmlFor="">location</label>
              <input
                type="text"
                value={updateProfile?.location}
                onChange={(e) => {
                  return setUpdateProfile({ ...updateProfile, location: e.target.value })
                }}
                className="p-2.5 text-sm w-full   bg-primaryDark text-white rounded-md border-none"
              />

            </div>

            <div className="form-controls w-1/3">
              <label className='block text-zinc-400 text-xs pb-2' htmlFor="">Photo Url</label>
              <input
                type="text"
                value={updateProfile?.photoUrl}
                onChange={(e) => {
                  return setUpdateProfile({ ...updateProfile, photoUrl: e.target.value })
                }}
                className="p-2.5 text-sm w-full   bg-primaryDark text-white rounded-md border-none"
              />

            </div>


          </div>


          <div className="form-control-wrapper">
            <div className="form-controls ">
              <label className='block text-zinc-400 text-xs pb-2' htmlFor="">Bio</label>
              <textarea
                rows="3"
                type="text"
                value={updateProfile?.bio}
                onChange={(e) => {
                  return setUpdateProfile({ ...updateProfile, bio: e.target.value })
                }}
                className="p-2.5 text-sm w-full   bg-primaryDark text-white rounded-md border-none"
              />

            </div>


          </div>

          <button type='submit' className='text-white bottom-[0%] right-[2%] absolute px-3 py-1 rounded-md bg-red-700 text-xs'>Update Profile <i className="ri-logout-box-r-line"></i></button>



        </form>


      </div>
    )
}

export default EditProfile;