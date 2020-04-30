const express = require('express')
const morgan = require('morgan')
require('./db')

const app = express()
const PORT = process.env.PORT || 8000


app.use(morgan('tiny'))

app.get('/api', (req, res) => {
  res.json({api: 'root'})
})

app.listen(PORT, console.log(`Server is starting at ${PORT}`))
