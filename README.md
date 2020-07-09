## Conpago Coding Task - Front End

### Overview:
Create a single page app with React and Redux (for state management) that will query the Star Wars API (https://swapi.dev/) to retrieve a list of people and display the details of the people in a table. Also, implement a next button to retrieve the next page of results.

### Requirements:
- Create a new single page app with React (create-react-app) and setup Redux to handle the state of the app
- When the page loads, do a GET request to https://swapi.dev/api/people/ 
- From the response object, use the array from the “results” key, to populate a table on the page. Use the keys “name”, “gender”, “birth_year” from the objects in the “results” array to populate the table with.
- Create a ‘Next’ button that will get the next page of results to display in the table (from any given page), using the endpoint given in the “next” key of the “results” object (no need to implement the previous button)
- Show “loading...” text when API is doing a request

### Required libraries
- React
- Redux

### Notes
Feel free to use any http client you’re comfortable with, e.g. axios, fetch etc.

CSS styling is optional, we’re happy with stock standard html, with little to no CSS. We’re only looking at how you implement this task with React, how you get data from an API and how you implement Redux actions/reducers within the app.
