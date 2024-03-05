"use client";
import { store } from "./store";
import { Provider } from "react-redux";

// provider is use to allow the view file to access the action and the reducer

export const ReduxProvider = ({children})=>{
<Provider store={store}>
    {children}
</Provider>
}