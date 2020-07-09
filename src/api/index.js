const BASE_URL = 'https://swapi.dev/api/people/'

export default {
  getPeople: (url) => {
    return fetch(url || BASE_URL).then(response => {
      if (response.ok) return response.json()
  
      throw new Error('Unable to get people')
    }).then(data => data)
  }
}