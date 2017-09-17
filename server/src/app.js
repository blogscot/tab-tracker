const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config')
const routes = require('./routes.js')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors()) // Enable anyone to access server

// inject routes
routes(app)

sequelize.sync().then(() => {
  app.listen(config.port)
  console.log(`Server started on port ${config.port}`)
})
