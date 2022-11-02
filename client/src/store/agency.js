import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const addInternationalResidents = createAsyncThunk("ADD_INTERNATIONAL_RESIDENTS", (data) =>
{
  return axios.post("/api/agency", data).then((resident) => resident.data);
});

export const updateInternationalResidents = createAsyncThunk("UPDATE_INTERNATIONAL_RESIDENTS",
  (data, thunkAPI) => {
    const { agency } = thunkAPI.getState();
    return axios
      .put(`/api/agency/${agency.id}`, data)
      .then((update) => update.data);
  }
);

export const deleteInternationalResidents = createAsyncThunk("DELETE_INTERNATIONAL_RESIDENTS", (id) => {
  return axios.delete(`/api/agency/${id}`);
});

export const getAllInternationalResidents = createAsyncThunk("GET_ALL_INTERNATIONAL_RESIDENTS", () => {
  return axios.get("/api/agency");
});

export const getInternationalResident = createAsyncThunk("GET_INTERNATIONAL_RESIDENT", (id) => {
  return axios.get(`/api/agency/${id}`).then((resident) => resident.data);
});

const agencyReducer = createReducer(null, {
  [getAllInternationalResidents.fulfilled]: (state, action) => action.payload,
  [getInternationalResident.fulfilled]: (state, action) => action.payload,
});

export default agencyReducer;