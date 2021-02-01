import React from 'react'
import { connect } from 'react-redux'
import PeopleTable from '../components/PeopleTable'
import { fetchPeople } from '../store/reducers'

function App({ fetchPeople, people, nextURL, prevURL, isLoading }) {
  React.useEffect(() => {
    fetchPeople()
  }, []) // eslint-disable-line

  const handleGetPeople = url => () => {
    fetchPeople({ url })
  }

  const hasPrevURL = !!prevURL
  const hasNextURL = !!nextURL

  return (
    <PeopleTable
      isLoading={isLoading}
      people={people}
      onClickNext={hasNextURL ? handleGetPeople(nextURL) : null}
      onClickPrev={hasPrevURL ? handleGetPeople(prevURL) : null}
    />
  )
}

const mapStateToProps = state => {
  return {
    isLoading: state.apiStatus !== 'idle',
    people: state.people,
    nextURL: state.nextURL,
    prevURL: state.prevURL
  }
}

export default connect(
  mapStateToProps,
  { fetchPeople }
)(App)
