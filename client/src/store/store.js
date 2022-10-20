import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import cultureReducer from "./culture";
import historyReducer from "./history";
import introCultureReducer from "./introCulture";
import milestonesReducer from "./milestones";
import residentsReducer from "./residents";
import userReducer from "./user"
import eventReducer from "./events";
import podcastReducer from "./podcast";
import episodeReducer from "./episodes";

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
  reducer: {
    user: userReducer,
    history: historyReducer,
    milestones: milestonesReducer,
    resident: residentsReducer,
    culture: cultureReducer,
    introCulture: introCultureReducer,
    events: eventReducer,
    podcast: podcastReducer,
    episode: episodeReducer
  },
});

export default store;