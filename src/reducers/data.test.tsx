import {
  FETCH_DATA_REQUEST,
  fetchDataRequest,
  FETCH_DATA_SUCCESS,
  fetchDataSuccess,
  FETCH_DATA_ERROR,
  fetchDataError, 
  fetchData
} from '../actions/data';
import dataReducer from './data';

describe('dataReducer', () => {
  let currentState = {
    data: [],
    loading: false,
    error: {}
  };

  it('should return the current state on an unknown action', () => {
    const state = dataReducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  }); 
 
  describe('fetchDataRequest', () => {   
    it('should update "loading" within the state', () => {
      let state;
      state = dataReducer(state, fetchDataRequest());
      expect(state).toEqual({
        data: [],
        loading: true,
        error: null 
      })
    });
  });

  describe('fetchDataSuccess', () => {   
    it('should update "data" within the state', () => {
      let state;
      state = dataReducer(state, fetchDataSuccess([{example: 'data'}]));
      expect(state).toEqual({
        data: [{example: 'data'}],
        loading: false,
        error: null 
      })
    });
  });

  describe('fetchDataError', () => {   
    it('should update "error" within the state', () => {
      let state;
      state = dataReducer(state, fetchDataError({example: 'error'}));
      expect(state).toEqual({
        data: [],
        loading: false,
        error: {example: 'error'}
      })
    });
  });

  
});