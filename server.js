const express = require('express')
const morgan = require('morgan')
const path = require('path')

const environment = process.env.NODE_ENV

const app = express()
const PORT = process.env.PORT || 8000

// connect to db
require('./db')

// morgan http logger
app.use(morgan('tiny'))

// use routes
const users = require('./api/users')

app.use('/api/users', users)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  })
}

console.log(environment)

// start server
app.listen(PORT, console.log(`Server is starting at ${PORT}`))
