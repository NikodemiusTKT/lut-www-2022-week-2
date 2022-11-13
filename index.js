#!/usr/bin/env node
const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


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
  // use array reduce function to sum up the numbers
  const numbersSum = numbersArray.reduce(
  (previousValue, currentValue) => previousValue + currentValue
);
  // return the sum as json object response
  res.json({sum: numbersSum})
})


app.listen(port, () => {
  console.log(`Express app is listening on port ${port}`)
})
