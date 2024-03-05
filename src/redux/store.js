"use client"
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./fetatures/auth-silce"
export const store = configureStore({
    // reducer is a function that take in an action of the application and make changes to the state and return it
    reducer:{
        authReducer
    }
})