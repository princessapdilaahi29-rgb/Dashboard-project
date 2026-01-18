import {createSlice , createAsyncThunk}  from '@reduxjs/toolkit';
import axios from 'axios';
import { Url , Errormesg } from '../../interface';


const initialState = {
     isLoading : false,
    isSuccess : false,
    isError : false,
    message : '',
    data : {}
}


export const loginfn = createAsyncThunk(
    'login/user',
    
      async(data : any , {rejectWithValue}) => {
        try {
            const res = await axios.post(`${Url}/user/login` , data)
            return res.data
        } catch (error) {
            if(error instanceof axios.AxiosError){
                return rejectWithValue(error.response?.data.message || Errormesg)
            }
            return rejectWithValue(Errormesg)
        }
    }
)



export const loginSlice = createSlice({
    name : 'login',
    initialState,
    reducers : {
        resetLoginState: () => initialState
    },
    extraReducers : (builder) => {
        builder.addCase(loginfn.pending , (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(loginfn.fulfilled , (state , action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        })
        builder.addCase(loginfn.rejected , (state , action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload as string;
        })
    }
})

export const { resetLoginState } = loginSlice.actions;