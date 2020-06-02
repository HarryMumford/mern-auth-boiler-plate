import app from './src/app'
import config from './src/config'
import connectDb from './src/db/connectDb'

const { PORT } = config

connectDb().then(() => {
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
})
