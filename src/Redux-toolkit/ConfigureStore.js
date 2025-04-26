import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice from "../Redux-toolkit/CounterSlide"
import globalSlice from "../Redux-toolkit/globalSlice"
const reducer = combineReducers({
    counter:counterSlice,
    global : globalSlice,
})
const store = configureStore({
    reducer, 
})

export default store;