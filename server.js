import config from './config'
import app from './src/app'
import connectDb from './src/db/connectDb'

const { port } = config

connectDb()

app.listen(port, () => console.log(`Server started on port ${port}`))
