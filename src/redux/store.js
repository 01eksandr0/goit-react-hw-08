import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import { authReducer } from "./auth/authSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "auth",
  version: 1,
  storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filterReducer,
  auth: authReducer,
});

const persisterReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persisterReducer,
});
export const persistor = persistStore(store);
