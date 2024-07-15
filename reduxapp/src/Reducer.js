import { createSlice } from "@reduxjs/toolkit";

const counterSlice  = createSlice({
    name:"ajay",
    initialState:{
        value1:0
    },
    reducers:{
        increment:(state)=>{
                 state.value1+=1
        },
        decrement:(state)=>{
            state.value1-=1
        },
    }
})
export const {increment,decrement}=counterSlice.actions;
export default counterSlice.reducer;