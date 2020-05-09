const express = require('express')
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')

const users = require('./src/api/users')
const auth = require('./src/api/auth')

const app = express()
const PORT = process.env.PORT || 8000

// Connect to db
require('./src/db/db')

// Morgan http logger
app.use(morgan('tiny'))

// Middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
)
app.use(bodyParser.json())

// Use routes
app.use('/api/users', users)
app.use('/api/auth', auth)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  })
}

// Start server
app.listen(PORT, console.log(`Server is starting at ${PORT}`))
