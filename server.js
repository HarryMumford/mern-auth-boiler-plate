import app from './src/app'
import config from './src/config'

const { PORT } = config

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
