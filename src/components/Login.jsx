import React, { useState } from "react";
import { validateLogInForm } from "../Utils/validate";
import axiosInstance from "../Utils/axiosInstances";
import { useNavigate } from "react-router-dom";
import {addCurrentUser} from "../Utils/redux/user"
import { useDispatch } from "react-redux";

function Login() {
  const [userInputValue, setUserInputValue] = useState({
    userEmail: "mark@gmail.com",
    userPassword: "Mark@1234",
  });
  const navigate = useNavigate();
  const dispatchHandler = useDispatch();

  const [errorMessage, setErrorMessage] = useState("");
  

  function clearErrorMessage() {
    setErrorMessage("");
  }

  async function onSubmitHandler(event) {
    try {
      event.preventDefault();

      const isValidFromData = validateLogInForm(
        userInputValue,
        clearErrorMessage
      );
      if (isValidFromData) {
        const response = await axiosInstance.post(
          "/api/v1/login",
          { ...userInputValue },
          {
            withCredentials: true,
          }
        );
        
        dispatchHandler(addCurrentUser(response?.data?.data))
        navigate("/feed");
      }
    } catch (err) {
      console.log(err);
      const errorMessage =
        err?.response?.data || err?.message || "An unexpected error occurred";
      setErrorMessage(errorMessage);
    }
  }

  return (
    <>
      <div className="w-full  h-screen ">
        <div className=" w-[80%] md:w-1/2 ml-[4vw]   absolute top-1/2 -translate-y-1/2">
          <h2 className="text-lg font-neue">Log In</h2>
          <p className="text-red-600 font-satoshi text-sm  rounded-md">
            {errorMessage}
          </p>

          <form onSubmit={onSubmitHandler} className="py-[2vw]">
            <InputField
              placeholder="Enter your email address"
              labelName="Email Address"
              onChangeHandler={(e) => {
                setUserInputValue({
                  ...userInputValue,
                  userEmail: e.target.value,
                });
              }}
            />

            <InputField
              placeholder="Password"
              labelName="password"
              onChangeHandler={(e) => {
                setUserInputValue({
                  ...userInputValue,
                  userPassword: e.target.value,
                });
              }}
            />

            <button className=" w-full md:w-1/2 text-sm  block rounded-md p-2.5 bg-discord">
              Login
            </button>
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
  );
}

function InputField({ placeholder, labelName, onChangeHandler }) {
  return (
    <div className="input-wrapper w-full mb-4">
      <label
        className="block text-sm pb-1.5 text-secondaryLightActive"
        htmlFor=""
      >
        {labelName || "missing label name"}
      </label>
      <input
        onChange={onChangeHandler}
        type="text"
        placeholder={placeholder || ""}
        className="p-3 text-sm w-full md:w-1/2  bg-primaryDark rounded-md border-none"
      />
    </div>
  );
}

export default Login;
