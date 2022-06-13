# JavaScript 1 Course Assignment

## Description

### Brief

In this assignment my task was to to find a public free-to-use API.

Make two calls to it:
1. To fetch an array of results
2. To fetch a single result using an id, name, or other property.

Both API calls should include a loading indicator and catch any errors and display a message on the page if an error occurs.

There are two branches with two different API's.
- main has a film themed API
- another-api has a fish themed API with pagination 

### index.html

- Loop through the results and create HTML for each result. 
- Display at least 3 different properties inside the HTML for each result.
- Link each result to a details.html page and to pass a parameter in the query string to that page.

### details.html

- Retrieve the id, name or other parameter from the query string.
- Add the parameter to the API URL in the format the API requires.
- Make an API call using the URL I created.
- Display at least 3 different properties from the received JSON on this page.
- Set the title of the HTML page to be one of the property values, like name, title or another relevant property.

### contact.html

Create a form with the following inputs and validation rules.
   - Name - required
   - Subject - must have a value with a minimum length of 10
   - Email - must have a value and be formatted like an email address
   - Address - must have a value with a minimum length of 25

When the form on this page is submitted, write code to validate the input. If any of the inputs fail validation display an error message for the relevant input.


## Built With

- HTML
- CSS
- JavaScript

## Contact

[My LinkedIn page](https://www.linkedin.com/in/hreinn-gylfason-b9a48521a/)
