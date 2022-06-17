import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./feed.css";
import { getUserDetails } from "../redux/action/userAction";

function Feed() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.userDetails.user.data);
  const navigate = useNavigate();
  const [toggal, setToggal] = useState(false);
  console.log(data);
  useEffect(() => {
    dispatch(getUserDetails());
  }, []);
  return (
    <div className="main-feed">
      {toggal ? (
        <div className="main-grid-cont">
          {data &&
            data.map((item) => {
              return (
                <div className="grid-item-feed" key={item.id}>
                  <img src={item.avatar} alt="" />
                  {item.first_name} {item.last_name}
                  {item.email}
                </div>
              );
            })}
        </div>
      ) : (
        <div className="sub-con">
          <h3
            className="h3"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/");
            }}
          >
            log out click here
          </h3>

          <div className="btn-cont">
            <h3 className="h33" onClick={() => setToggal(true)}>
              Show List
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Feed;
