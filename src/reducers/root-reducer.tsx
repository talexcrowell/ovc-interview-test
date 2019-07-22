import {combineReducers} from 'redux';
import dataReducer from './data';

const rootReducer = combineReducers<any, any>({
  data: dataReducer 
});

export default rootReducer;