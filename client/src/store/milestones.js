import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const addMilestones = createAsyncThunk("ADD_MILESTONES", (data) => {
  return axios.post("/api/milestones", data).then((milestone) => milestone.data);
});

export const updateMilestones = createAsyncThunk("UPDATE_MILESTONES", (data, thunkAPI) => {
  const {milestones} = thunkAPI.getState();
  return axios.put(`/api/milestones/${milestones.id}`, data).then((update) => update.data);
});

export const deleteMilestones = createAsyncThunk("DELETE_MILESTONES", (id) => {
  return axios.delete(`/api/milestones/${id}`);
});

export const getAllMilestones = createAsyncThunk("GET_ALL_MILESTONES", () => {
  return axios.get("/api/milestones");
});

export const getMilestone = createAsyncThunk("GET_MILESTONE", (id) => {
  return axios.get(`/api/milestones/${id}`).then((milestone) => milestone.data);
});

const milestonesReducer = createReducer(null, {
  [getAllMilestones.fulfilled]: (state, action) => action.payload,
  [getMilestone.fulfilled]: (state, action) => action.payload,
});

export default milestonesReducer;
