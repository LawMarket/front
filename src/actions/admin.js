import axios from "axios";
import {
  GET_USERS,
  USERS_ERROR,
  UPDATE_PROFILE,
  ACCOUNT_DELETE,
  CLEAR_PROFILE,
  GET_PROFILES,
  LAWYERS_REGISTER_FAIL,
  LAWYERS_REGISTER_SUCCESS,
} from "./types";
import { setAlert } from "./alert";

export const lawyerRegister = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify(formData);

  try {
    const res = await axios.post("/api/admin/create-lawyer", body, config);

    dispatch({
      type: LAWYERS_REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: LAWYERS_REGISTER_FAIL,
    });
  }
};

export const getAllUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/admin/allUsers");
    console.log(res.data);
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: USERS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
