import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

export const loginController=createAsyncThunk("users/loginController",async(obj,{ rejectWithValue })=>{

   try {
     const res=await axios.post("http://localhost:8080/api/login",obj,{ withCredentials: true }) 
    
     toast.success(res.data.message)
       
     return res.data;
   } catch (error) {
         toast.error(error.response.data.message);
        return  rejectWithValue(error.response.data);
   }
})



export const RegisterController=createAsyncThunk("users/REgisterController",async(obj,{ rejectWithValue })=>{


    try {
        const res=await axios.post("http://localhost:8080/api/register",obj,{ withCredentials: true }) 
        toast.success(res.data.message)
        return res.data;
    } catch (error) {
        toast.error(error.response.data.message);
        return rejectWithValue(error.response.data);
    }
})


export const LogoutController=createAsyncThunk("users/LogoutController",async(obj,{ rejectWithValue })=>{


    try {
        const res=await axios.get("http://localhost:8080/api/logout",{ withCredentials: true }) 
        toast.success(res.data.message)
        return res.data;
    } catch (error) {
        toast.error(error.response.data.message);
        return rejectWithValue(error.response.data);
    }
})


const AuthSlice=createSlice(
    {
        name:"users",
        initialState:{
            Currentuser:null,
            isloading:false,
            isError:false,
            
        },
        reducers:{},
        extraReducers:(builder)=>{
            builder.addCase(loginController.pending,(state,action)=>{
               state.isloading=true;

            })
            builder.addCase(loginController.fulfilled,(state,action)=>{
                state.isloading=false;
                state.message=(action.payload.message)
                state.Currentuser=(action.payload.Data);
             })
           
             builder.addCase(loginController.rejected,(state,action)=>{
                
                state.isloading=false
                   state.isError=true
                   state.message=(action.payload.message);
             })  




             builder.addCase(RegisterController.pending,(state,action)=>{
                state.isloading=true;
 
             })
             builder.addCase(RegisterController.fulfilled,(state,action)=>{
                 state.isloading=false;
                 state.message=(action.payload.message)
                 
              })
            
              builder.addCase(RegisterController.rejected,(state,action)=>{
                 
                 state.isloading=false
                    state.isError=true
                    state.message=(action.payload.message);
              })  


              builder.addCase(LogoutController.fulfilled,(state,action)=>{
                 
                state.isloading=false
                   state.isError=false
                   state.Currentuser=null
                  
             }) 


             
        }
    }
);


export default AuthSlice;