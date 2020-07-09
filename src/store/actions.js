import starWarsApi from '../api'
import * as types from './actionTypes'

export const getPeople = (url = '') => dispatch => {
  // Start loading
  dispatch({ type: types.IS_LOADING })

  starWarsApi
    .getPeople(url)
    .then((data => {
      const { results, next, previous } = data
      
      // Show people (stop loading)
      dispatch({
        type: types.GET_PEOPLE_OK,
        people: results,
        nextURL: next,
        prevURL: previous
      })
    }))
  .catch(error => {
    dispatch({ type: types.GET_PEOPLE_FAIL })
    alert(`Error: ${error.message}`)
  }) 
}