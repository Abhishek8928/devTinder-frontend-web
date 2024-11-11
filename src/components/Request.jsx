import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../Utils/axiosInstances";
import { addRequestList,removeRequest,removeRequestList } from "../Utils/redux/request";
import { useEffect } from "react";
import RowCard from "./RowCard";
import { useNavigate } from "react-router-dom";

function Request() {
  const dispatchHandler = useDispatch();
  const navigateHandler = useNavigate();
  const requestList = useSelector((store) => store.request);


  async function updateConnectionRequestStatus(status, requestId) {
    try {
        await axiosInstance.post(`/api/v1/review/${status}/${requestId}`);
        dispatchHandler(removeRequest(requestId))
        navigateHandler('/profile/connection')
    } catch (err) {
      const errText =
        err?.response?.data?.message ||
        err.message ||
        err?.response?.data?.statusText;
    }
  }

  async function getRequestList() {
    try {
      const response = await axiosInstance.get("/api/v1/request/received");
      dispatchHandler(addRequestList(response?.data?.data));
      
    } catch (err) {
      const errText =
        err?.response?.data?.message ||
        err.message ||
        err?.response?.data?.statusText;
    }
  }

  useEffect(() => {
    getRequestList();
  }, []);

  if (!requestList) null;
  if (!requestList?.length) {
    return (
       <div className="w-full">
 <h2 className="text-white text-[1.2vw] mb-[2vw] tracking-wide font-satoshi">
        No Connection Request Received
      </h2>


       </div>
    );
  }

  return (
    requestList && (
      <>
        <div className="w-full">
          <h2 className="text-white text-[1.2vw] mb-[2vw] tracking-wide font-satoshi">
            Review Connection Request
          </h2>

          <div class="container mx-auto px-4 sm:px-8"></div>

          <div className="bg-[#232323] p-[1vw]  rounded-md  w-full">
            {requestList?.map((request) => (
              <RowCard {...request?.data} requestId={request?._id}  statusHandler={updateConnectionRequestStatus} isReviewRequest={true} />
            ))}
          </div>
        </div>
      </>
    )
  );
}

export default Request;
