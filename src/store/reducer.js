import { combineReducers } from "redux";
import entitiesReducer from './enteties'

export default combineReducers({
    entities: entitiesReducer
})