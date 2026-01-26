import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./Slice/loginSlice";
import { getAllUserSlice } from "./Slice/pages/Dashboard/Users/AllUser";
import { createUsertSlice } from "./Slice/pages/Dashboard/Users/NewUser";
import { deletingUserSlice } from "./Slice/pages/Dashboard/Users/DeleteUser";
import { OneUserSlice } from "./Slice/GetOneUser";
import { ApdateUserSlice } from "./Slice/pages/Dashboard/Users/ApdateUser";
import { absent_user_slice } from "./Slice/pages/Dashboard/Users/absentUser";

export const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    allUsers: getAllUserSlice.reducer,
    newUser: createUsertSlice.reducer,
    deleteUser:deletingUserSlice.reducer,
    getonuser:OneUserSlice.reducer,
    ApdateUser: ApdateUserSlice.reducer,
    absent: absent_user_slice.reducer

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
