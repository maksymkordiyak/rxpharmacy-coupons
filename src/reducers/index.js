import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import test from "./test";
import menu from "./menu";

export default combineReducers({
  form: formReducer,
  menu,
  test,
});
