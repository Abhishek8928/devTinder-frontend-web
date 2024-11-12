import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import axiosInstance from "../Utils/axiosInstances";
import { useDispatch, useSelector } from "react-redux";
import { addFeed, removeFeed, removeUserFromFeed } from "../Utils/redux/feed";
function Feed() {
  const dispatchHandler = useDispatch();

  const feed = useSelector((store) => store.feed);

  async function getFeed() {
    try {
      const response = await axiosInstance.get(`/api/v1/feed`);
      dispatchHandler(addFeed(response?.data?.data));
    } catch (err) {
      const errText =
        err?.response?.data?.message ||
        err.message ||
        err?.response?.data?.statusText;
      console.log(errText);
    }
  }

  useEffect(() => {
    getFeed();
  }, []);

  if (!feed) return null;

  return (
    <>
      {feed.length === 0 ? (
        <h1 className="text-[#afafaf] text-[1vw] py-[1.2vw] text-center">
          No User Has Found{" "}
        </h1>
      ) : (
        <div className="flex justify-center mt-[4vw]">
          {<UserFeedCard {...feed[0]} />}
        </div>
      )}
      <Outlet />
    </>
  );
}

export function UserFeedCard({
  firstName,
  lastName,
  gender,
  bio,
  age,
  photoUrl,
  skills,
  showeCaseProfile,
  _id,
}) {
  const dispatchHandler = useDispatch();
  async function connectionRequestStatus(status, userId) {
    const response = await axiosInstance.post(
      `/api/v1/request/${status}/${userId}`
    );
    dispatchHandler(removeUserFromFeed(userId));
  }

  return (
    <>
      <div className="flex text-center items-center  bg-[#232323] w-1/3 rounded-lg overflow-hidden">
        <img className="w-1/2 h-full object-cover" src={photoUrl} alt="Movie" />

        <div className="p-2 w-1/2">
          <h2 className="card-title  text-white mb-2  font-neue">
            {firstName + " " + lastName}
          </h2>

          <ul className="text-sm text-zinc-300 mb-2">
            {bio &&
              bio?.split("|").map((item, index) => (
                <li className="text-xs text-[#adadad]" key={index}>
                  {item}
                </li>
              ))}
          </ul>
          <small className="leading-tight text-zinc-300 text-xs">
            {gender && gender} , {age && age}
          </small>
          <p className="text-xs text-white">{skills && skills.join(",")}</p>
          {!showeCaseProfile && (
            <div className="card-actions justify-end mt-[1vw]">
              <button
                onClick={() => {
                  connectionRequestStatus("interested", _id);
                }}
                className="px-4 py-1.5 bg-primary text-xs rounded-md "
              >
                Interested
              </button>
              <button
                onClick={() => {
                  connectionRequestStatus("ignored", _id);
                }}
                className="text-xs text-red-600 font-medium  rounded-md px-4 py-1.5 "
              >
                Ignored
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Feed;
