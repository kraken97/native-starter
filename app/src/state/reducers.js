/* eslint-disable object-shorthand, comma-dangle, eol-last, import/imports-first */
import loginReducer from './loginReducer/reducer';
import { combineReducers } from 'redux';
// XX: Do not rename this variable if you want reducer generator
// to keep working properly (and you do want that, right?)
const applicationReducers = {
  loginReducer: loginReducer
};
export default function createReducer() {
  return combineReducers(applicationReducers);
}