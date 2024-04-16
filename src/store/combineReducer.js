import {combineReducers} from '@reduxjs/toolkit';
import {LoginSlice} from './reducers/LoginSlice';

const CombineReducer = combineReducers({
  login: LoginSlice.reducer,
});

export default CombineReducer;
