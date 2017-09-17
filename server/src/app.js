const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors()) // Enable anyone to access server

app.post('/register', (req, res) => {
  res.send({
    message: `User ${req.body.email} registered successfully.`,
  })
})

app.listen(process.env.Port || 8081)
