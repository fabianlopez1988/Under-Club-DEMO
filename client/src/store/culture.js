import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const addCulture = createAsyncThunk("ADD_CULTURE", (data) => {
  return axios.post("/api/culture", data).then((culture) => culture.data);
});

export const updateCulture = createAsyncThunk("UPDATE_CULTURE", (data, thunkAPI) => {
  const {culture} = thunkAPI.getState();
  return axios.put(`/api/culture/${culture.id}`, data).then((update) => update.data);
});

export const deleteCulture = createAsyncThunk("DELETE_CULTURE", (id) => {
  return axios.delete(`/api/culture/${id}`);
});

export const getAllCulture = createAsyncThunk("GET_ALL_CULTURE", () => {
  return axios.get("/api/culture");
});

export const getCulture = createAsyncThunk("GET_CULTURE", (id) => {
  return axios.get(`/api/culture/${id}`).then((culture) => culture.data);
});

const cultureReducer = createReducer(null, {
  [getAllCulture.fulfilled]: (state, action) => action.payload,
  [getCulture.fulfilled]: (state, action) => action.payload,
});

export default cultureReducer;
