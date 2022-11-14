import { createStore } from "redux";
import combineReducers from "./entities";

export const store = createStore(combineReducers)