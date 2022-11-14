import { combineReducers } from "redux";
import bugsReducer from './bugs'
import projectReducer from "./projects";

//combining reducers into 1 object
export default combineReducers({
    bugs: bugsReducer,
    projects: projectReducer,
})