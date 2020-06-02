import express from 'express'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
import morgan from 'morgan'

// Routes
import allRoutes from './routes'

// Init express app
const app = express()

// CORS Middleware
app.use(cors())

// Logger Middleware
if (process.env.NODE_ENV === 'test') {
  app.use(morgan('dev'))
}

// Bodyparser Middleware
app.use(bodyParser.json())

// Use Routes
app.use('/', allRoutes)

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

export default app
