import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";


export const getUser = createAsyncThunk("GET_USER", () => {
  const userId = JSON.parse(localStorage.getItem("user")).id;
  return axios.get(`/api/admin/${userId}`).then((user) => user.data);
});

export const userRegister = createAsyncThunk("USER_REGISTER", (data) => {
  return axios.post("/api/admin", data).then((user) => user.data);
});

export const userLogin = createAsyncThunk("USER_LOGGED", (data) => {
  return axios.post("/api/admin/login", data).then((user) => {
    localStorage.setItem("user", JSON.stringify(user.data));
    return user.data;
  });
});

export const userLogout = createAsyncThunk("USER_LOGOUT", () => {
  return axios.post("/api/admin/logout").then(() => {
    localStorage.removeItem("user");
  });
});

export const userUpdate = createAsyncThunk("USER_UPDATE", (data) => {
  const userId = JSON.parse(localStorage.getItem("user")).id;
  return axios.put(`/api/admin/${userId}`, data)
  .then((user)=> {
    localStorage.setItem("user", JSON.stringify(user.data));  
    return user.data;
  })
});

export const userDelete = createAsyncThunk("USER_DELETE", (user) => {
  return axios.delete(`/api/admin/${user.id}`);
});

export const getUsersAll = createAsyncThunk("GET_ALL_USER", () => {
  return axios.get(`/api/admin`);
});

const userReducer = createReducer(null, {
  [getUser.fulfilled]: (state, action) => action.payload,
  [getUsersAll.fulfilled]: (state, action) => action.payload,
});

export default userReducer;