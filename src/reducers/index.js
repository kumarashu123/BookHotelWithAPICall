import { combineReducers } from "redux";

import login from "./login";
import member from "./member";
import hotel from "./hotel";
import createUser from "./signup";

const rootReducer = combineReducers({ login, member, hotel, createUser });

export default rootReducer;
