import { createAsyncThunk, createSlice  } from "@reduxjs/toolkit";
import axios from "axios";
import { Errormesg, Url } from "../../../../../interface";



const initialState = {
    isLoading : false,
    isSuccess : false,
    isError : false,
  data : {},
    message : "",
}


export const createUserfn = createAsyncThunk(
    '/user/new/',
    async (data:any,{rejectWithValue})=>{
        try {
            
     const res = await axios.post(`${Url} /user/new` ,data)
     return res.data


        } catch (error) {
            if(error instanceof axios.AxiosError){
                return rejectWithValue(error.response?.data.message|| Errormesg)
            }
            return rejectWithValue (Errormesg)
            
        }
    }
)


export const createUsertSlice = createSlice({
    name : 'creating user',
    reducers : {
        resetUserState : () => initialState
    },
    initialState,
    extraReducers(builder) {
        // Pending Case 
        builder.addCase(createUserfn.pending , () => ({
            ...initialState,
            isLoading : true
        }))
        // FullFilled Case
        .addCase(createUserfn.fulfilled , (state , action) => ({
            ...initialState,
            isSuccess : true,
            data : action.payload
        }))
        // Rejected CAse 
        .addCase(createUserfn.rejected , (state , action) => ({
            ...initialState,
            isError : true,
            message : String(action.payload)
        }))
    },
})