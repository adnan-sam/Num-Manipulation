import changeTheNumber from "./upDown";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeTheNumber,
    // Here you can add and combine other reducers also
});

export default rootReducer;