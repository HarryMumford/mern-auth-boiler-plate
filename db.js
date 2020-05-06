const mongoose = require('mongoose')

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost/bar-dice-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Mongoose connected')
  })
  .catch((err) => console.log(err))
