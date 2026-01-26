import { createAsyncThunk,createSlice, type Action } from "@reduxjs/toolkit";
import axios from "axios";
import { Url,Errormesg } from "@/interface";


interface getoneuserResponse{
result:Users
}

interface Users{
    id:number;
    name:string,
    phone:string,
    email:string,
    password:string
}




const initialState ={
  isLoading:false,
  issucces:false,
  iserror:false,
  message:"",
  date:{} as Users

}




export const geteOneUserfn= createAsyncThunk(
    "/user/one/:id",
    async (id:any,{rejectWithValue})=>{
try {

    const res=await axios.get<getoneuserResponse>(`${Url}/user/getoneuser/${id}`);
   return res.data.result 
} catch (error) {
    if(error instanceof axios.AxiosError){
        return rejectWithValue(error.request.data.message||Errormesg);
    }
}
return rejectWithValue(Errormesg)
    }
)


 
export const OneUserSlice= createSlice({
    name:"getOne user",
    reducers:{},
    initialState,
    extraReducers(builder){
        // pending
        builder
        .addCase(geteOneUserfn.pending, (state) => ({
        ...initialState,
        isLoading: true,
      }))
       .addCase(geteOneUserfn.fulfilled, (state,action) => ({
        ...initialState,
        issucces: true,
        date: action.payload
      }))
       .addCase(geteOneUserfn.rejected, (state,action) => ({
        ...initialState,
        iserror: true, 
        message: String(action.payload)
      }));
    },
});