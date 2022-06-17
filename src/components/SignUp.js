// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { useDispatch } from "react-redux/es/exports";
// import { register } from "../redux/action/userAction";
// import { useNavigate } from "react-router-dom";
// import "./SignIn.css";
// function SignUp() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [data, setData] = useState({
//     email: "",
//     password: "",
//   });

//   const dataChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const submit = (e) => {
//     e.preventDefault();
//     dispatch(register(data));
//     navigate("/feed")
//   };

//   return (
//     <div className="main">
//       <div className="grid-container">
//         <div className="grid-item">
//           <form onSubmit={submit}>
//             <div className="item2-container">
//               <label htmlFor="id" className="label">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={data.email}
//                 style={{ marginBottom: "5px" }}
//                 onChange={dataChange}
//               />
//               <label htmlFor="password" className="label">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 value={data.password}
//                 style={{ marginBottom: "5px" }}
//                 onChange={dataChange}
//               />
//               <button type="submit" className="submit-btn">
//                 Sign Up
//               </button>
//             </div>
//           </form>
//         </div>
//         <div className="grid-item item1">
//           <div className="item1-container">
//             <h1 className="item1-label">Welcome !</h1>
//             <p>if you have already registered</p>
//             <NavLink to="/">click here</NavLink>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignUp;
