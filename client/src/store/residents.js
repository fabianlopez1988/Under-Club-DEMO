import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const addResidents = createAsyncThunk("ADD_RESIDENTS", (data) =>
{
  return axios.post("/api/residents", data).then((resident) => resident.data);
});

export const updateResidents = createAsyncThunk("UPDATE_RESIDENTS",
  (data, thunkAPI) => {
    const { resident } = thunkAPI.getState();
    return axios
      .put(`/api/residents/${resident.id}`, data)
      .then((update) => update.data);
  }
);

export const deleteResidents = createAsyncThunk("DELETE_RESIDENTS", (id) => {
  return axios.delete(`/api/residents/${id}`);
});

export const getAllResidents = createAsyncThunk("GET_ALL_RESIDENTS", () => {
  return axios.get("/api/residents");
});

export const getResident = createAsyncThunk("GET_RESIDENT", (id) => {
  return axios.get(`/api/residents/${id}`).then((resident) => resident.data);
});

const residentsReducer = createReducer(null, {
  [getAllResidents.fulfilled]: (state, action) => action.payload,
  [getResident.fulfilled]: (state, action) => action.payload,
});

export default residentsReducer;