import { createSlice } from "@reduxjs/toolkit";



const Add = createSlice({

    name:"cart",
    initialState:{
        items:[]
    },

    reducers:{
        addItems:(state, action)=>{
          state.items.push(action.payload)
        },
        removeItems:(state, action)=>{
        state.items.filter((item)=>item.id != action.payload.id)
        }
    }
})

export  const {addItems, removeItems} = Add.actions
export default Add.reducer