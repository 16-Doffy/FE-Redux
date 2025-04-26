import { createSlice } from "@reduxjs/toolkit";
const globalSlice = createSlice ({
    name:"global",
    initialState:{
        darkmode:false,
    },
    reducers:{
        toggleDarkMode : (state, {payload}) => {
            return{
                ...state,
                darkmode:payload,
            }
        }
    }
})
export const {toggleDarkMode} = globalSlice.actions;
export default globalSlice.reducer;