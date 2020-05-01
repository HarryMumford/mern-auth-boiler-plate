const mongoose = require('mongoose')

const MONGODB_URI =
  'mongodb+srv://HarryMumford:cambiocambio@cluster0-1pu2q.gcp.mongodb.net/test?retryWrites=true&w=majority'
mongoose
  .connect(MONGODB_URI || 'mongodb://localhost/bar-dice-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Mongoose connected')
  })
  .catch((err) => console.log(err))
