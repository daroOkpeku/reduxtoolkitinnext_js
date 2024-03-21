"use client"
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./fetatures/auth-silce"
import addReducer from "./fetatures/AddItems"
import { api } from "@/api/apitest";
// import { persistStore, persistReducer } from 'redux-persist';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";   // this is localStorage
 
const persistConfig = {
    key:"root",
    storage
}

const reducer = combineReducers({
    authReducer,
    addReducer,
   apiReducer:api.reducer
})
// this is used combine the storing of data with the reducer
 const presistedReducer = persistReducer(persistConfig, reducer);
 const store = configureStore({
    // reducer is a function that take in an action of the application and make changes to the state and return it
    // reducer:{
    //     authReducer,
    //     apiReducer:api.reducer // this to add the api reducer
    // },
    reducer:presistedReducer,
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware({serializableCheck: false, immutableCheck: false,}).concat(api.middleware), // Add RTK-Query middleware this is for the api
})

const persistor  = persistStore(store)

export{store, persistor }