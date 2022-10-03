import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const addIntroCulture = createAsyncThunk("ADD__INTRO_CULTURE", (data) => {
  return axios.post("/api/introculture", data).then((introCulture) => introCulture.data);
});

export const getAllIntroCulture = createAsyncThunk("GET_ALL_CULTURE", () => {
  return axios.get("/api/introculture");
});

export const updateIntroCulture = createAsyncThunk("UPDATE_CULTURE", (data, thunkAPI) => {
  const {introCulture} = thunkAPI.getState();
  return axios.put(`/api/introculture/${introCulture.data[0].id}`, data).then((update) => update.data);
});

const introCultureReducer = createReducer(null, {
  [getAllIntroCulture.fulfilled]: (state, action) => action.payload,
});

export default introCultureReducer;
