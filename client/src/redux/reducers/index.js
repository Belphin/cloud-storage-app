import { combineReducers } from "redux";
import file from "./fileReducer";
import user from "./userReducer";

const rootReducer = combineReducers({
	user,
	file,
});

export default rootReducer;
