import React from "react";
import { createStore } from "redux";
import LoginReducer from "../reducers/LoginReducer";
import UserReducer from "../reducers/UserReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({ LoginReducer, UserReducer });
const Store = createStore(rootReducer);

export default Store;
