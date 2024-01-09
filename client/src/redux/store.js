import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./admin/adminSlice";

export const store = configureStore({
  reducer: {admin: adminReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
