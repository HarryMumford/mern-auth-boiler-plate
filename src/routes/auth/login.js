import { Router } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from '../../config'
import User from '../../models/User'

const { JWT_SECRET } = config
const loginRoute = Router()

/**
 * @route   POST auth/login
 * @desc    Login user
 * @access  Public
 */

loginRoute.post('/', async (req, res) => {
  const { email, password } = req.body

  // Simple validation
  if (!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' })
  }

  try {
    // Check for existing user
    const user = await User.findOne({ email })
    if (!user) throw Error('User Does not exist')

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) throw Error('Invalid credentials')

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: 3600 })
    if (!token) throw Error('Could not sign the token')

    res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    })
  } catch (e) {
    res.status(400).json({ msg: e.message })
  }
})

export default loginRoute
