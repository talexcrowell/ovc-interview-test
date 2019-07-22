export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST
});

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const fetchDataSuccess = (data: any) => ({
  type: FETCH_DATA_SUCCESS,
  data
});

export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';
export const fetchDataError = (error: any) => ({
  type: FETCH_DATA_ERROR,
  error
});

export const fetchData = () => (dispatch: any) => {
  dispatch(fetchDataRequest());
  return fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
  })
  .then(res => res.json())
  .then(data => dispatch(fetchDataSuccess(data)))
  .catch(err => dispatch(fetchDataError(err)))
}
