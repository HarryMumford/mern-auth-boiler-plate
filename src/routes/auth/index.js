import { Router } from 'express'

import loginRoute from './login'
import registerRoute from './register'
import userRoute from './user'

const authRoutes = Router()

authRoutes.get('/', (req, res) => {
  res.status(200).json({ msg: 'API auth routes connected' })
})

authRoutes.use('/login', loginRoute)
authRoutes.use('/register', registerRoute)
authRoutes.use('/user', userRoute)

export default authRoutes
