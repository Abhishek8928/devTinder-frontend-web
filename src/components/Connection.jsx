import React, { useEffect, useState } from "react";
import axiosInstance from "../Utils/axiosInstances";
import { useDispatch, useSelector } from "react-redux";
import { addConnectionList } from "../Utils/redux/connection";
import RowCard from "./RowCard";
import { Outlet } from "react-router-dom";

function Connection() {
  const connectionList = useSelector((store) => store.connection);
  const [errMsg, setErrMsg] = useState("");
  const dispatchHandler = useDispatch();

  async function getConnectionList() {
    try {
      const response = await axiosInstance.get("/api/v1/view/connection");
      dispatchHandler(addConnectionList(response?.data?.data));
    } catch (err) {
      const errText =
        err?.response?.data?.message ||
        err.message ||
        err?.response?.data?.statusText;
    }
  }

  useEffect(() => {
    getConnectionList();
  }, []);
  if (!connectionList) return;

  if (!connectionList?.length) {
    return (
      <div className="text-white">
        <h2 className="text-white text-[1.2vw] mb-[2vw] tracking-wide font-satoshi">
          No Connection has foumd
        </h2>
      </div>
    );
  }

  return (
    <>
      <div className="w-full">
        <h2 className="text-white text-[1.2vw] mb-[2vw] tracking-wide font-satoshi">
          Connection List
        </h2>

        <div class="container mx-auto px-4 sm:px-8"></div>

        <div className="bg-[#232323] p-[1vw]  rounded-md  w-full">
          {connectionList?.map((connection) => (
            <RowCard {...connection} />
          ))}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Connection;
