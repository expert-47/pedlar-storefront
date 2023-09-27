/*
 * combines all th existing reducers
 */
import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import tagsSlice from "./tagsSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
const middleware = [];
middleware.push(thunk);

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  app: appSlice,
  tags: tagsSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const enhancers = [...middleware];
export const store = configureStore({
  reducer: rootReducer,
  middleware: enhancers,
});

// Exports

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
