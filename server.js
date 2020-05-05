const express = require('express')
const morgan = require('morgan')
// const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 8000

// // cors policy
// app.use(cors())

// connect to db
require('./db')

// morgan http logger
app.use(morgan('tiny'))

// use routes
const users = require('./api/users')

app.use('/api/users', users)

// start server
app.listen(PORT, console.log(`Server is starting at ${PORT}`))
