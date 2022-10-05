import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const addEvent = createAsyncThunk("ADD_EVENT", (data) => {
  return axios.post("/api/events", data).then((event) => event.data);
});

export const updateEvent = createAsyncThunk("UPDATE_EVENT", (data, thunkAPI) => {
  const {event} = thunkAPI.getState();
  console.log(event, "EVENT");
  console.log(data, "SOY DATA")
  return axios.put(`/api/events/${event.id}`, data).then((update) => update.data);
});

export const deleteEvent = createAsyncThunk("DELETE_EVENT", (id) => {
  return axios.delete(`/api/events/${id}`);
});

export const getAllEvent = createAsyncThunk("GET_ALL_EVENT", () => {
  return axios.get("/api/events");
});

export const getEvent = createAsyncThunk("GET_EVENT", (id) => {
  return axios.get(`/api/events/${id}`).then((event) => event.data);
});

const eventReducer = createReducer(null, {
  [getAllEvent.fulfilled]: (state, action) => action.payload,
  [getEvent.fulfilled]: (state, action) => action.payload,
});

export default eventReducer;
