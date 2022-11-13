# lut-www-2022-week-2

The 2nd weekly exercise for the LUT University's "Advanced Web Applications" course.

## Requirements

### 1. Hello world route

* 'npm start' should start express.js server on port 3000

* GET route to "/hello" :
  * should send back JSON object `{msg: "Hello world"}` to the client.

### 2. ID echoing

* GET route to "/echo/:id" :
  * should send the id back to the client in a JSON object in property "id"

### 3. POST request

* POST route to "/sum": 
  * route should take an array of numbers from the "numbers" property of the request body, 
  * array of numbers should be summed together 
  * the sum of the numbers should be send back to the client.

### 4. Static folder

* express server should have staticly served folder with a index.html file inside of it

* index.html file should contain a `<h1>` tag with the text `"Hello world"` inside

### 5. Front-end and back-end communication

* index.html should have an input field (textarea or input tag) with an id of 'input-text'
* index.html should have a button with an id of 'submit-data'. 
* When pressing the button, the website should send the contents of the input field in a JSON object to the POST route "/list". 
* The backend should save the text to a list and respond with the list of words.
