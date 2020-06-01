import { Router } from 'express'
import authRoutes from './auth'
import users from './users'

const allRoutes = Router()

allRoutes.get('/', (req, res) => {
  res.status(200).json({ msg: 'API connected' })
})

allRoutes.use('/auth', authRoutes)
allRoutes.use('/users', users)

export default allRoutes
