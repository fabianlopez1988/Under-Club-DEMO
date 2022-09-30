import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import historyReducer from "./history";
import milestonesReducer from "./milestones";
import residentsReducer from "./residents";
import userReducer from "./user"

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
  reducer: {
    user: userReducer,
    history: historyReducer,
    milestones: milestonesReducer,
    resident: residentsReducer
  },
});

export default store;