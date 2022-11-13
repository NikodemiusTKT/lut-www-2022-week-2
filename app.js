#!/usr/bin/env node
const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const path = require('path')
app.use('/', express.static(path.join(__dirname, 'static')))

// list -array to save the numbers for the "list" POST path
let list = [];


// simple hello world get route
app.get('/hello', (req, res) => {
  res.json({msg: 'Hello world'})
})

// get route for echoing the request parameter "id"
app.get('/echo/:id', (req, res) => {
  res.json({id: req.params.id})
})

// post route that sums up the array of numbers given in request body
app.post('/sum', (req, res) => {
  // get the numbers array from the request body
  const numbersArray = req.body.numbers
  // use array reduce function to sum up the numbers in the numbersArray
  const numbersSum = numbersArray.reduce(
  (previousValue, currentValue) => previousValue + currentValue
);
  // return the sum as json object response
  res.json({sum: numbersSum})
})

// POST route for adding text items to list
app.post('/list', (req,res) => {
  // get the number from the request body
  const number = req.body.text;
  // add the new number to the list
  list.push(number)
  // return the list array as json object
  res.json({
    list
  })

})


app.listen(port, () => {
  console.log(`Express app is listening on port ${port}`)
})
