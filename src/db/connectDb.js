import mongoose from 'mongoose'
import config from '../../config'

const connectDb = () => {
  const { dbHost } = config

  mongoose
    .connect(dbHost, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err))
}

export default connectDb
