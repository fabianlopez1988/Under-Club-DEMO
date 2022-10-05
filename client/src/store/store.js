import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import cultureReducer from "./culture";
import historyReducer from "./history";
import introCultureReducer from "./introCulture";
import milestonesReducer from "./milestones";
import userReducer from "./user"
import eventReducer from "./events";

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
  reducer: {
    user: userReducer,
    history: historyReducer,
    milestones: milestonesReducer,
    culture: cultureReducer,
    introCulture: introCultureReducer,
    events: eventReducer,
  },
});

export default store;