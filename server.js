const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 8000

const MONGODB_URI = 'mongodb+srv://HarryMumford:cambiocambio@cluster0-1pu2q.gcp.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(MONGODB_URI || 'mongodb://localhost/bar-dice-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected')
})

app.use(morgan('tiny'))

app.get('/api', (req, res) => {
  res.json({api: 'root'})
})

app.listen(PORT, console.log(`Server is starting at ${PORT}`))
