import app from './src/app'
import config from './src/config'

const { PORT } = config

const port = PORT || 8000

app.listen(PORT, () => console.log(`Server started on PORT ${port}`))
