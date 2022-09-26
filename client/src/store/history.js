import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const addHistory = createAsyncThunk("ADD_HISTORY", (data) => {
  return axios.post("/api/history", data).then((historie) => historie.data);
});

export const updateHistory = createAsyncThunk("UPDATE_HISTORY", (id, data) => {
  return axios.put(`/api/history/${id}`, data).then((update) => update.data);
});

export const deleteHistory = createAsyncThunk("DELETE_HISTORY", (id) => {
  return axios.delete(`/api/history/${id}`);
});

export const getAllHistory = createAsyncThunk("GET_ALL_HISTORY", () => {
  return axios.get("/api/history");
});

export const getHistory = createAsyncThunk("GET_HISTORY", () => {
  const userId = JSON.parse(localStorage.getItem("user")).id;
  return axios.get(`/api/history/${userId}`).then((history) => history.data);
});

const historyReducer = createReducer(null, {
  [getAllHistory.fulfilled]: (state, action) => action.payload,
  [getHistory.fulfilled]: (state, action) => action.payload,
});

export default historyReducer;
