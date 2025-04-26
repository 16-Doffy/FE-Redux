import {createStore,combineReducers} from "redux";
import counterReducer from "./Counter";

const reducer = combineReducers({
//key:value 
counter:counterReducer,


})
const store = createStore(reducer);
export default store