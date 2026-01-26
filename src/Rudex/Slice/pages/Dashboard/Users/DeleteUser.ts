import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Url,Errormesg } from "@/interface";


const initialState = {
    isLoading:false,
    isSuccess:false,
    isErorr:false,
    message:'',
    date:{}
}


export const deletingUserfn = createAsyncThunk(
    '/user/delete',
    async(id:any,{rejectWithValue})=>{
        try {
            const res = await axios.delete(`${Url}/user/delete/${id}`) 
            return res.data
        } 
        catch (error) {
            if(error instanceof axios.AxiosError){
                 return rejectWithValue(error.response?.data.message|| Errormesg)
            }
             return rejectWithValue(Errormesg)  
        }
    } 
)




export const deletingUserSlice =  createSlice({
    name : 'deleting user',
    reducers : {},
    initialState,
    extraReducers(builder) {
        builder.addCase(deletingUserfn.pending , () => ({
            ...initialState,
            isLoading : true
        }))
        .addCase(deletingUserfn.fulfilled , (state , action) => ({
            ...initialState,
            isSuccess : true,
            data : action.payload
        }))
        .addCase(deletingUserfn.rejected , (state , action) => ({
            ...initialState,
            isError : true,
            message : String(action.payload)
        }))
    },
})