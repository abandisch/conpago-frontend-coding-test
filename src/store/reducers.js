import starWarsApi from '../api'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  people: [],
  nextURL: '',
  prevURL: '',
  apiStatus: 'idle'
}


export const fetchPeople = createAsyncThunk('starwars/fetchPeople', async (urlData) => {
  const { url } = urlData ?? { url : '' };
  const peopleData = await starWarsApi.getPeople(url)
  return peopleData
})

const slice = createSlice({
  name: 'starwars',
  initialState,
  extraReducers: {
    [fetchPeople.pending]: (state) => {
      state.apiStatus = 'pending'
    },
    [fetchPeople.fulfilled]: (state, action) => {
      const { results, next, previous } = action.payload
      state.people = results
      state.nextURL = next
      state.prevURL = previous
      state.apiStatus = 'idle'
    },
    [fetchPeople.rejected]: (state) => {
      state.apiStatus = 'idle'
    },
  },
});

export default slice.reducer;
