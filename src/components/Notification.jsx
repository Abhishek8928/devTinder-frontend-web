import React, { useEffect, useState } from "react";
import axiosInstance from "../Utils/axiosInstances";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addNotificationList } from "../Utils/redux/notification";
import timeAgo from "../Utils/helper";

function Notification() {
 
  const notificationList = useSelector(store => store.notification);
  const dispatchHandler = useDispatch()
  const navigateHandler = useNavigate()


  function closeNotificationHandler(){
    navigateHandler('/feed')
  }

  async function getNotificationList() {
    try{
      const responses = await axiosInstance.get("/api/v1/notifications");
    
    dispatchHandler(addNotificationList(responses?.data?.data?.connectionRequestInfo))
    }catch(err){
      const errText =
        err?.response?.data?.message ||
        err.message ||
        err?.response?.data?.statusText;
    }
    }
  }



  useEffect(() => {
    
    getNotificationList();
  }, []);

  if(!notificationList)  return null;
  

  return notificationList && (
    <>
      <div className="absolute top-[12%] z-[30] right-[2%] rounded-lg bg-[#181818] w-1/4 ">
        <div className="border-b-[1px] flex justify-between items-center border-b-[#282828]  p-[1vw] ">
          <h3 className="font-satoshi text-white font-medium b">
            Notifications
          </h3>

          <i onClick={closeNotificationHandler} className="ri-close-fill text-white"></i>
        </div>
        <div className="p-[1vw] max-w-lg">

        {
          notificationList.length === 0 ? <h1 className="font-satoshi text-zinc-400   text-sm">No Notification Has Found</h1> : (
            notificationList?.map((item, index) => (
              <NotificationCard key={index} {...item} />
            ))
          )


        }
        </div>
      </div>
    </>
  );
}

function NotificationCard({ fromUserId, toUserId, status,timeStampForRequest }) {
  return (
    <>
      <div className="p-[0.6vw] border-b-[1px] border-b-[#282828] ">
        <div className="profile-info flex gap-[1.4vw] ">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={
              status === "accepted"
                ? `${toUserId?.photoUrl} `
                : `${fromUserId?.photoUrl} `
            }
            alt=""
          />

          <div className="w-[80%]">
            <div className="text-info  leading-tight">
              <small className="text-xs text-white font-medium">
                {status === "accepted"
                  ? `${toUserId?.firstName} has accepted your request`
                  : `${fromUserId?.firstName} has interested in you`}
              </small>
              <p className="text-[#616161] text-xs">{timeAgo(timeStampForRequest)}</p>
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
}



export default Notification;
