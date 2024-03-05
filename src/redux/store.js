"use client"
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./fetatures/auth-silce"
import { api } from "@/api/apitest";
export const store = configureStore({
    // reducer is a function that take in an action of the application and make changes to the state and return it
    reducer:{
        authReducer,
        apiReducer:api.reducer // this to add the api reducer
    },
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(api.middleware), // Add RTK-Query middleware this is for the api
})