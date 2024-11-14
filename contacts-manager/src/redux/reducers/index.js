import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import contactReducer from "./contactReducer";

// root reducer
const rootReducer = combineReducers({
    "profile": profileReducer,
    "contacts": contactReducer
})

export default rootReducer;
