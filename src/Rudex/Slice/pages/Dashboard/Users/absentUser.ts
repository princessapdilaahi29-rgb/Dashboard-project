import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios, { Axios } from "axios";
import { Url,Errormesg } from "@/interface";


const initialState={
    isloading:false,
    isssucess:false,
    iserror:false,
    message:"",
    date:{}
}


export const absent_userfn= createAsyncThunk(
    '/user/absent/:id',
 async(id , {rejectWithValue})=>{
    try {
        const res = await axios.put(`${Url}/student/absent/${id}`)
            return res.data

            

            } catch (error) {
            if(error instanceof axios.AxiosError){
                return rejectWithValue(error.response?.data.message || Errormesg)
            }
            return rejectWithValue(Errormesg)
    } 
 }
)



export const absent_user_slice = createSlice({
    name : 'absent user',
    reducers : {
        resetabsentuserState : () => initialState
    },
    initialState,
    extraReducers(builder) {
        // Pending Case
        builder.addCase(absent_userfn.pending , () => ({
            ...initialState,
            isLoading : true
        }))
        builder.addCase(absent_userfn.fulfilled , (state , action) => ({
            ...initialState,
            isSuccess : true,
            data : action.payload
        }))
        builder.addCase(absent_userfn.rejected , (state , action) => ({
            ...initialState,
            isError : true,
            message : String(action.payload)
        }))
    },
})

export const { resetabsentuserState } =absent_user_slice.actions