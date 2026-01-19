import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./Slice/loginSlice";
import { getAllUserSlice } from "./Slice/pages/Dashboard/Users/AllUser";
import { createUsertSlice } from "./Slice/pages/Dashboard/Users/NewUser";

export const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    allUsers: getAllUserSlice.reducer,
    newUser: createUsertSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
