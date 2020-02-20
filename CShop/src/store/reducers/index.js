import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import ThemeOptions from "./ThemeOptions";
import Layout from "./Layout";
import Auth from "./Auth";
import category from "./category";
import staff from "./staff";
import customerAction from './customerAction'

export default {
  Auth,
  ThemeOptions,
  Layout,
  category,
  staff,
  customerAction,
  form: formReducer
};
