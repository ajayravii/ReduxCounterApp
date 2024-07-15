import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './Reducer'
const store= configureStore({
    reducer:{
        counter1:counterReducer,
    }
})
export default store;