import React, { useState } from "react";
import { validateLogInForm } from "../Utils/validate";
import axiosInstance from "../Utils/axiosInstances";
import { useNavigate } from "react-router-dom";
import {addCurrentUser} from "../Utils/redux/user"
import { useDispatch } from "react-redux";

function Login() {
  const [userInputValue, setUserInputValue] = useState({
    username:"",
    firstName:"",
    lastName:"",
    userEmail: "",
    userPassword: "",
  });
  const navigate = useNavigate();
  const dispatchHandler = useDispatch();

  const [isLoginForm, setIsLoginForm] = useState(true)
  const [errorMessage, setErrorMessage] = useState("");
  

  function clearErrorMessage() {
    setErrorMessage("");
  }

  async function onLoginHandler(event) {
    try {
      event.preventDefault();

      const isValidFromData = validateLogInForm(
        userInputValue,
        clearErrorMessage
      );
      const {firstName , lastName , username , ...SanitizeData} = userInputValue;
      if (isValidFromData) {
        const response = await axiosInstance.post(
          "/api/v1/login",
          { ...SanitizeData },
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

  async function onSignUpHandler(event) {
    try {
      event.preventDefault();

      const isValidFromData = validateLogInForm(
        userInputValue,
        clearErrorMessage
      );
      if (isValidFromData) {
        const response = await axiosInstance.post(
          "/api/v1/signup",
          { ...userInputValue },
        );
        
        dispatchHandler(addCurrentUser(response?.data?.data))
        navigate("/profile");
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
      <div className="w-full  h-screen absolute top-0 left-0 ">
        <div className=" w-[80%] md:w-1/2 ml-[4vw]   absolute top-1/2 -translate-y-1/2">
          <h2 className="text-lg font-neue text-white">{isLoginForm ? "Log In" :"Signup"}</h2>
          <p className="text-red-600 font-satoshi text-sm  rounded-md">
            {errorMessage}
          </p>

          <form onSubmit={isLoginForm ? onLoginHandler : onSignUpHandler} className="py-[2vw]">
          {
            !isLoginForm && <>
            <InputField
              placeholder="Username"
              labelName="username"
              onChangeHandler={(e) => {
                setUserInputValue({
                  ...userInputValue,
                  username: e.target.value,
                });
              }}
            />
          <div className=" flex gap-2">

          <InputField
              placeholder="First Name"
              labelName="First Name"
              onChangeHandler={(e) => {
                setUserInputValue({
                  ...userInputValue,
                  firstName: e.target.value,
                });
              }}
            />
            <InputField
              placeholder="last Name"
              labelName="Last Name"
              onChangeHandler={(e) => {
                setUserInputValue({
                  ...userInputValue,
                  lastName: e.target.value,
                });
              }}
            />
          </div>
            
            </>
          }
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
            <small onClick={()=>{
              setIsLoginForm(previous => !previous)
            }} className="text-xs text-secondaryLightActive mb-2.5 block">{isLoginForm ? "Not Have An Account ? signup" : "Already Have An Account ? Login"}</small>
            <button className="text-white w-full text-sm  block rounded-md p-2.5 bg-hackathoneGreen">
              {isLoginForm ? "Login" : "Signup"}
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

export function InputField({ placeholder, labelName, onChangeHandler }) {
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
        className="p-3 text-white text-sm w-full   bg-primaryDark rounded-md border-none"
      />
    </div>
  );
}

export default Login;


