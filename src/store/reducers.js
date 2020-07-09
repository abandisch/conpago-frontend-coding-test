import {
  IS_LOADING,
  GET_PEOPLE_OK,
  GET_PEOPLE_FAIL
} from './actionTypes'

const initialState = {
  people: [],
  nextURL: '',
  prevURL: '',
  isLoading: false
}

const starWarsPeople = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case GET_PEOPLE_FAIL:
      return {
        ...state,
        isLoading: false
      }
    case GET_PEOPLE_OK:
      const { people, nextURL, prevURL } = action
      return {
        people,
        nextURL,
        prevURL,
        isLoading: false
      }
    default:
      return { ...state }
  }
}

export default starWarsPeople
