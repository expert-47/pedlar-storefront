/*
 * combines all th existing reducers
 */
import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
const middleware = [];
middleware.push(thunk);

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  app: appSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const enhancers = [...middleware];
export const store = configureStore({
  reducer: persistedReducer,
  middleware: enhancers,
});

// Exports

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
