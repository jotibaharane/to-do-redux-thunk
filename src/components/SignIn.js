import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../redux/action/userAction";

import "./SignIn.css";
function SignIn() {
  let login1 = localStorage.getItem("token");
  const dat = useSelector((state) => state.userLogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const dataChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(login(data));
    navigate("/dashboard");
  };

  useEffect(() => {
    console.log(login1);
    if (login1) {
      navigate("/dashboard");
    }
  }, [login1, dat, navigate]);

  return (
    <div className="main">
      <div className="grid-container">
        <div className="grid-item item1">
          <div className="item1-container">
            <h1 className="item1-label">Welcome Back!</h1>
          </div>
        </div>
        <div className="grid-item">
          <form onSubmit={submit}>
            <div className="item2-container">
              <label htmlFor="id" className="label">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={data.email}
                style={{ marginBottom: "5px" }}
                onChange={dataChange}
              />
              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={data.password}
                style={{ marginBottom: "5px" }}
                onChange={dataChange}
              />
              <button type="submit" className="submit-btn">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
