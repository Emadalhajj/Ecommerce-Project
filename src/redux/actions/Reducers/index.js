import allproduct from "./productsReduce";
import reducerDetials from "./reduceDetials";
import reducerCrad from "./reducerCrad";
import logIn from "./reduceUser";
import { combineReducers } from "redux";
// const { default: logIn } = require("./reduceUser");

const Reducers = combineReducers({
    logIn,
    red2 : allproduct,
    reducerDetials,
    reducerCrad
})
export default Reducers