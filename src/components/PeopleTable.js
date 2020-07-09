import React from 'react'

function PeopleTable({ 
  isLoading, 
  people, 
  onClickPrev,
  onClickNext
}) {

  const navButtons = [
    {
      id: 'previous',
      children: '<< Prev',
      onClick: onClickPrev,
      disabled: !onClickPrev,
    },
    {
      id: 'next',
      children: 'Next >>',
      onClick: onClickNext,
      disabled: !onClickNext,
    }
  ]

  return (
    <table border="1">
      <thead>
        <tr><th align="left">Name</th><th align="left">Gender</th><th align="left">Birth Year</th></tr>
      </thead>
      <tbody>
        {people.map(person => (
          <tr key={person.name}>
            <td>{person.name}</td>
            <td>{person.gender}</td>
            <td>{person.birth_year}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={3}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
              {navButtons.map(({id, ...props}) => <button key={id} {...props} />)}
            </div>
          </td>
        </tr>
        {isLoading && <tr><td colSpan={3}>Loading ...</td></tr>}
      </tfoot>
    </table>
  ) 
}

export default PeopleTable