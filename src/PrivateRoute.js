import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

function PrivateRoute(props) {
  const dat = useSelector((state) => state.userLogin);
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("token");
    if (!login) {
      navigate("/");
    }
  }, [Component, dat, navigate]);
  return (
    <div>
      <Component />
    </div>
  );
}

export default PrivateRoute;
