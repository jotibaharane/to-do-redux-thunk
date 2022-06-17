import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import {
  userLoginReducer,
  userDetailsReducer,
} from "./redux/reducer/userReducer";
const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userDetails: userDetailsReducer,
});

const initialState = [];
const middelware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middelware))
);

export default store;
