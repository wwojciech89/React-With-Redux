import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

// Store Creator connected to specific reducers
// Configuring Store with redux tool kit and allows to dispatch async actions
export function configureAppStore() {
    return configureStore({ reducer });
}