"use client"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useGetDataQuery, usePostDataMutation } from '../../api/apitest';
// this is slice is used to group a list of data, string or integer  that is going to be accessed in the entire 
// appllication 

const initialState = {
    value:{
        isAuth:false,
        email:"",
        password:"",
        uid:"",
        isModerator:false
    }
}

export const auth = createSlice({
    // name is just like the key in localstorage api in javascript
    name:'auth',
    initialState:initialState,
        // initialState is used to store all the values such as string, number or objects
   
    reducers:{
        logOut:()=>{return initialState},
        logIn:(state, action)=>{
            
            // state this is used to access the keys in the initialState that store the object
            // action this used to pass the response to update the initialState values
            state.value.isAuth = true;
            state.value.email = action.payload.email;
            state.value.password = action.payload.password;
            state.value.uid = "124697";
            state.value.isModerator = false;
            // return{
            //     // value:{
            //     //     isAuth:true,
            //     //     username:action.payload,
            //     //     uid:"124697",
            //     //     isModerator:false
            //     // }
            //     
            // }
        }
}
})


export const {logIn, logOut} = auth.actions;
export default auth.reducer