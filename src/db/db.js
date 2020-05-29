import mongoose from 'mongoose'
import config from '../../config'
const { MONGO_URI, MONGO_DB_NAME } = config

const db = `${MONGO_URI}/${MONGO_DB_NAME}`

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('Mongoose connected')
  })
  .catch((err) => console.log(err))
