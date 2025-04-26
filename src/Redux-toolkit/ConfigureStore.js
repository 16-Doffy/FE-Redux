import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice from "../Redux-toolkit/CounterSlide"

const reducer = combineReducers({
    counter:counterSlice,
})
const store = configureStore({
    reducer, 
})

export default store;