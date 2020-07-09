import React from 'react'
import { connect } from 'react-redux'
import PeopleTable from '../components/PeopleTable'
import { getPeople } from '../store/actions'

function App({ getPeople, people, nextURL, prevURL, isLoading }) {
  React.useEffect(() => {
    getPeople()
  }, []) // eslint-disable-line

  const handleGetPeople = url => () => {
    getPeople(url)
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
    isLoading: state.isLoading,
    people: state.people,
    nextURL: state.nextURL,
    prevURL: state.prevURL
  }
}

export default connect(
  mapStateToProps,
  { getPeople }
)(App)
