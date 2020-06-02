import mongoose from 'mongoose'
import { Mockgoose } from 'mockgoose'
import config from '../config'

const mockgoose = new Mockgoose(mongoose)

const { MONGODB_URI } = config
const db = MONGODB_URI

const connectDb = () => {
  return new Promise((resolve, reject) => {
    if (process.env.NODE_ENV === 'test') {
      console.log(process.env.NODE_ENV, 'should be test')
      mockgoose.prepareStorage().then(() => {
        mongoose
          .connect(MONGODB_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
          })
          .then((res, err) => {
            if (err) return reject(err)
            resolve()
          })
      })
    }
  })
}

const closeDb = () => {
  return mongoose.disconnect()
}

export { connectDb, closeDb }

// else {
//   console.log(process.env.NODE_ENV, 'should be prod')
//   mongoose
//     .connect(db, {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useUnifiedTopology: true,
//     })
//     .then(() => console.log('MongoDB Connected...'))
//     .catch((err) => console.log(err))
//   resolve()
// }
