import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import axiosInstance from "../Utils/axiosInstances";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../Utils/redux/feed";
function Feed() {
  const [pageNo, setPageNo] = useState(1);
  const dispatchHandler = useDispatch();

  const feed = useSelector((store) => store.feed);

  async function getFeed() {
    try {
      const response = await axiosInstance.get(
        `/api/v1/feed?pageNo=${pageNo}&limit=6`
      );

      dispatchHandler(addFeed(response?.data?.data));
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getFeed();
  }, []);

  return (
    feed && (
      <>
        <div className="flex justify-center mt-[4vw]">
          <UserFeedCard {...feed[0]} />
        </div>
        <Outlet />
      </>
    )
  );
}

function UserFeedCard({ firstName, lastName, gender, bio, age, photoUrl , skills }) {

  console.log(skills)
  return (
    <>
      <div className="flex bg-base-100 shadow-xl bg-[#232323] w-1/3 rounded-lg overflow-hidden">
        <img className="w-1/2" src={photoUrl} alt="Movie" />

        <div className="p-2 w-1/2">
          <h2 className="card-title text-base  font-neue">
            {firstName + " " + lastName}
          </h2>
          
          <ul className="text-sm text-zinc-300">
          
            
            {
            
          
          
          bio && bio?.split("|").map((item,index) => <li className="text-xs text-[#adadad]" key={index} >{item}</li>)
          
          
          }</ul>
          <small className="leading-tight">
            {gender} , {age || "not provided"}
          </small>
          <p className="text-sm">{skills && skills.join(",")}</p>
          <div className="card-actions justify-end">
            <button className="px-4 py-2 bg-primary text-xs rounded-md ">
              Interested
            </button>
            <button className="text-xs text-red-600 font-medium  rounded-md px-4 py-2 ">
              Ignored
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feed;
