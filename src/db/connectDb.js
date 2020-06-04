import mongoose from 'mongoose'
import config from '../../config'

const connectDb = () => {
  const { dbHost } = config

  const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }

  const mode = process.env.NODE_ENV

  mongoose
    .connect(dbHost, options)
    .then(() => console.log(`Connected to ${mode} MongoDB`))
    .catch((err) => console.log(err))
}

export default connectDb
