import config from './config'
import app from './src/app'
import connectDb from './src/db/connectDb'

const { port, logging } = config

connectDb()

app.listen(port, () => {
  if (logging) {
    console.log(`Server started on port ${port}`)
  }
})

// Export for testing purposes
export default app
