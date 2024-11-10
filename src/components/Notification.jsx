import React, { useEffect, useState } from "react";
import axiosInstance from "../Utils/axiosInstances";
import { useNavigate } from "react-router-dom";

function Notification() {
  const [notificationsList, setNotificationList] = useState([]);
  const navigate = useNavigate()


  function closeNotificationHandler(){
    navigate('/feed')
  }

  async function getNotificationList() {
    const responses = await axiosInstance.get("/api/v1/notifications");
    setNotificationList(responses.data.data.connectionRequestInfo);
  }



  useEffect(() => {
    getNotificationList();
  }, []);

  return notificationsList.length === 0 ? (
    <h1>fetching</h1>
  ) : (
    <>
      <div className="absolute top-[12%] z-[30] right-[2%] rounded-lg bg-[#181818] w-1/3 ">
        <div className="border-b-[1px] flex justify-between items-center border-b-[#282828]  p-[1vw] ">
          <h3 className="font-satoshi font-medium b">
            Notifications
          </h3>

          <i onClick={closeNotificationHandler} className="ri-close-fill"></i>
        </div>
        {notificationsList.length &&
          notificationsList.map((item, index) => (
            <NotificationCard key={index} {...item} />
          ))}
      </div>
    </>
  );
}

function NotificationCard({ fromUserId, toUserId, status }) {
  return (
    <>
      <div className="p-[1.6vw] border-b-[1px] border-b-[#282828] ">
        <div className="profile-info flex gap-[1.4vw]">
          <img
            className="w-10 h-10 rounded-full"
            src={
              status === "accepted"
                ? `${toUserId?.photoUrl} `
                : `${fromUserId?.photoUrl} `
            }
            alt=""
          />

          <div className="w-[80%]">
            <div className="text-info  leading-tight">
              <small className="text-xs font-medium">
                {status === "accepted"
                  ? `${toUserId?.firstName} has accepted your request`
                  : `${fromUserId?.firstName} has interested in you`}
              </small>
              <p className="text-[#616161] text-xs">1 hour ago</p>
            </div>

            {status === "interested" && <ConnectionStatusAction />}
          </div>
        </div>
      </div>
    </>
  );
}

function ConnectionStatusAction() {
  return (
    <>
      <div className="flex bg-[#232323] mt-4 p-[1vw] rounded-md w-full gap-[1vw] items-center">
        <button className="px-4 py-2 bg-primary text-xs rounded-md ">
          Accepted
        </button>
        <button className="text-xs text-red-600 font-medium  rounded-md px-4 py-2 ">
          Rejected
        </button>
      </div>
    </>
  );
}

export default Notification;
