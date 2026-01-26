
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Errormesg, Url } from "../../../../../interface";



interface usersResponse {
    boolean: boolean,
    result:User[]
}




interface User {
    id : number,
    name : string,
    phone : string,
    email : string,
    password : string,
  
}

const initialState = {
    isLoading : false,
    isSuccess : false,
    isError : false,
    data : [] as User[],
    message : "",
    

}


export const getallusersfn = createAsyncThunk(

'/user/all',
        async( _ , {rejectWithValue}) => {
            try {
                const res = await axios.get<usersResponse>(`${Url}/user/all`)
                return res.data.result
            } catch (error) {
                if(error instanceof axios.AxiosError){
                    return rejectWithValue(error.response?.data.message || Errormesg)
                }
        }
        return rejectWithValue(Errormesg)}

)






export const getAllUserSlice = createSlice({
  name: "all users ",
  reducers: {},
  initialState,
  extraReducers(builder) {
    // Pending Case
    builder.addCase(getallusersfn.pending, (state, action) => ({
      ...initialState,
      isLoading: true,
    }));
    builder.addCase(getallusersfn.fulfilled, (state, action) => ({
      ...initialState,
      IsSUccess: true,
      data: action.payload,
    }));
    builder.addCase(getallusersfn.rejected, (state, action) => ({
      ...initialState,
      iserror: true,
      message: String(action.payload),
    }));
  },
});





