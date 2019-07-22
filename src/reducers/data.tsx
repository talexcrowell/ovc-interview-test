import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR
} from '../actions/data';

const initialState = {
  data: [],
  loading: false,
  error: null
};

export default function dataReducer(state=initialState, action: any){
  if(action.type === FETCH_DATA_REQUEST){
    return{
      ...state,
      loading: true
    }
  }
  else if(action.type === FETCH_DATA_SUCCESS){
    return{
      ...state,
      data: [...action.data],
      loading: false
    }
  }
  else if(action.type === FETCH_DATA_ERROR){
    return{
      ...state,
      loading: false,
      error: action.error
    }
  }
  return state;
}