
export const FETCH_DATA_BEGIN = 'FETCH_DATA_BEGIN';
export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchDataBegin = () => ({
  type: FETCH_DATA_BEGIN
})

export const fetchData = (movies) => ({
  type: FETCH_DATA,
  payload :{movies}
})
export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: { error}
})

export const triggerLogIn =  (username, password) => async dispatch => {
console.log( 'troggerlogon')
}