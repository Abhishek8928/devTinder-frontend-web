import React from 'react'

function Signup() {
  return (
    <>
    <div className="w-full  h-screen ">
        <div className=" w-[80%] md:w-1/2 ml-[4vw]   absolute top-1/2 -translate-y-1/2">
          <h2 className="text-lg">Sign In</h2>

          <form action="" className="py-[2vw]">

          <div className="input-wrapper w-full mb-4">
              <label
                className="block text-sm pb-1.5 text-secondaryLightActive"
                htmlFor=""
              >
                username
              </label>
              <input
                type="text"
                placeholder="Username"
                className="p-3 text-sm w-full md:w-1/2  bg-primaryDark rounded-md border-none"
              />
            </div>
            <div className="input-wrapper w-full mb-4">
              <label
                className="block text-sm pb-1.5 text-secondaryLightActive"
                htmlFor=""
              >
                Email Address
              </label>
              <input
                type="text"
                placeholder="Enter your email address"
                className="p-3 text-sm w-full md:w-1/2  bg-primaryDark rounded-md border-none"
              />
            </div>

            <div className="input-wrapper w-full mb-4">
              <label
                className="block text-sm pb-1.5 text-secondaryLightActive"
                htmlFor=""
              >
                Password
              </label>
              <input
                type="text"
                placeholder="Password"
                className="p-3 text-sm w-full md:w-1/2  bg-primaryDark rounded-md border-none"
              />
            </div>

            <button className=" text-sm w-full md:w-1/2 block rounded-md p-2.5 bg-primary">Create Account</button>
          </form>
        </div>
        <div className=" hidden md:block  md:w-[28rem] absolute right-0 top-0 h-full">
          <img
            className="h-full w-full object-cover"
            src="https://ik.imagekit.io/sheryians/re-imagine/forms_juF8FGrpz.png"
            alt=""
          />
        </div>
      </div>
    
    </>
  )
}

export default Signup