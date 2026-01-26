import { createAsyncThunk ,createSlice, isPending } from "@reduxjs/toolkit";
import axios from "axios";
import { Url ,Errormesg } from "@/interface";



const initialState={
    isLoading:false,
    issuccess:false,
    iserror:false,
    message:'',
    data:{}
}



export const creatingApateUserfn =createAsyncThunk(
    '/user/Apdate',
    async(date:any,{rejectWithValue})=>{
        try {
            const res=await axios.put(`${Url}/user/update/${date.id}`,date)
            return res.data


        } catch (error) {
            if(error instanceof axios.AxiosError){
                return rejectWithValue(error.response?.data.message|| Errormesg)
            }
        }
        return rejectWithValue(Errormesg)
    }
   
)

export  const ApdateUserSlice= createSlice({
    name:'user APdate',
   reducers:{
         resetApdateUser : () => initialState
   },
    initialState,
    extraReducers(builder) {
        builder.addCase(creatingApateUserfn.pending , () => ({
            ...initialState,
            isLoading : true
        }))
        .addCase(creatingApateUserfn.fulfilled , (_ , action) => ({
            ...initialState,
            isSuccess : true,
            data : action.payload
        }))
        .addCase(creatingApateUserfn.rejected , (_ , action) => ({
            ...initialState,
            isError : true,
            message : String(action.payload)
        }))
    },
})


export const { resetApdateUser } = ApdateUserSlice.actions