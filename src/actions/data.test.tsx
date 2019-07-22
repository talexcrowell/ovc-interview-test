import {
  FETCH_DATA_REQUEST,
  fetchDataRequest,
  FETCH_DATA_SUCCESS,
  fetchDataSuccess,
  FETCH_DATA_ERROR,
  fetchDataError, 
  fetchData
} from './data';
import { doesNotReject } from 'assert';


describe('data Actions', () => {

  it('Should return the FETCH_DATA_REQUEST action', () => {
      const action = fetchDataRequest();
      expect(action.type).toEqual(FETCH_DATA_REQUEST);
  });

  it('Should return the FETCH_DATA_SUCCESS action', () => {
    const data = [{example: 'information'}]
    const action = fetchDataSuccess(data);
    expect(action.type).toEqual(FETCH_DATA_SUCCESS);
    expect(action.data).toEqual(data);
  });

  it('Should return the FETCH_DATA_ERROR action', () => {
    const data = [{error: 'information'}]
    const action = fetchDataError(data);
    expect(action.type).toEqual(FETCH_DATA_ERROR);
    expect(action.error).toEqual(data);
  });
});

describe('fetchData', () => {

  beforeEach(() => {
    global.fetch.resetMocks();
  });
    it('Should dispatch fetch call to API ', () => {
        const dispatch = jest.fn();
        global.fetch.mockResponse(JSON.stringify({ data: '12345' }))
          fetchData()(dispatch).then((res) => {
            expect(dispatch).toHaveBeenCalledWith(fetchDataRequest())
            expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users', {
              method: 'GET',
              headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
              }
            });
        });
    });
});
