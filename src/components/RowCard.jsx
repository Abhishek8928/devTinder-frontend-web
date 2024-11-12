import { Link } from "react-router-dom";

function RowCard({
  firstName,
  lastName,
  gender,
  age,
  bio,
  photoUrl,
  username,
  isReviewRequest,
  statusHandler,
  requestId,_id
}) {
  return (
    <>
      <div className="row-card p-[0.6vw] border-b-[1px] flex items-center w-full border-b-[#4d4d4d]">
        <div className="user-info flex gap-2 items-center w-1/4 ">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={photoUrl}
            alt=""
          />
          <div className="leading-none">
            <small className="text-[#afafaf] text-xs">@{username}</small>
            <h2 className="text-white text-sm">{firstName + " " + lastName}</h2>
          </div>
        </div>

        <div className="w-1/4 ">
          <p className="text-xs text-[#afafaf]">
            {bio?.slice(0, 200) || "bio is not present"}
          </p>
        </div>

        <div className="w-1/4 text-center">
          <small className="text-[#afafaf] text-xs">{gender}</small>
          <h2 className="text-white text-xs">{age || "not present"}</h2>
        </div>

        {isReviewRequest ?  (
          <div className="w-1/4  text-center ">
            <button onClick={ ()=>{
                statusHandler("accepted",requestId)
            }
            } className="px-4 py-1.5  text-white bg-primary text-xs rounded-md ">
              Accpeted
            </button>
            <button onClick={()=>{
                statusHandler("rejected",requestId)
            }} className="text-xs text-red-600 font-medium  rounded-md px-4 py-1.5 ">

              Rejected
            </button>
          </div>
        ) :  !isReviewRequest && (
            <Link to={`/profile/connection/${_id}`}
             className="px-4 py-1.5  text-white bg-primary text-xs rounded-md ">
              View Profile
            </Link>
        )
    
    }
        
      </div>
    </>
  );
}

export default RowCard;
