import { useSelector } from "react-redux";
import { UserFeedCard } from "./Feed";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../Utils/axiosInstances";
import { useEffect, useState } from "react";

function ConnectionProfile() {
  
  const navigateHandler = useNavigate();
  const {userId} = useParams();
  const [viewProfile , setViewProfile] = useState("")

  

  async function viewConnectionProfile(userId) {
    try {
      const response = await axiosInstance.get(
        `/api/v1/profile/connection/${userId}`
      );
      setViewProfile(response?.data?.data)
    } catch (err) {
      const errText =
        err?.response?.data?.message ||
        err.message ||
        err?.response?.data?.statusText;
      console.log(errText);
    }
  }

  function closeHandler() {
    navigateHandler("/profile/connection");
  }

  useEffect(()=>{
    viewConnectionProfile(userId);
  },[])

  return viewProfile && (
    <div className="bg-[rgba(0,0,0,0.8)] flex justify-center items-center w-full h-screen fixed top-0 left-0 ">
      <UserFeedCard {...viewProfile} showeCaseProfile={true} />

      <i
        onClick={closeHandler}
        className="ri-close-fill absolute top-[2%] text-[2vw] right-[2%] text-white"
      ></i>
    </div>
  );
}

export default ConnectionProfile;
