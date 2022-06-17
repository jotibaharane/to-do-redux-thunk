import axios from "axios";

import {
  ORDER_LIST_MY_RESET,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_RESET,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,

} from "../constant/userConstatnt";

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: ORDER_LIST_MY_RESET });
  dispatch({ type: USER_DETAILS_RESET });
  dispatch({ type: USER_LOGOUT });
};

export const login = (userData) => async (dispatch) => {
  console.log(userData);

  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = { headers: { "Contnet-Type": "application/json" } };
    const { data } = await axios.post(
      "https://reqres.in/api/login  ",
      userData,
      config
    );
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("token", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};



export const getUserDetails = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
    });

    const { data } = await axios.get("https://reqres.in/api/users?page=2");

    console.log(data);
    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

