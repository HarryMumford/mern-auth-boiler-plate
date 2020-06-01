import { Router } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../../models/User'
import config from '../../config'

const { JWT_SECRET } = config
const registerRoute = Router()

/**
 * @route   POST auth/register
 * @desc    Register new user
 * @access  Public
 */

registerRoute.post('/', async (req, res) => {
  console.log(JWT_SECRET)
  const { name, email, password } = req.body

  // Simple validation
  if (!name || !email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' })
  }

  try {
    const user = await User.findOne({ email })
    if (user) throw Error('User already exists')

    const salt = await bcrypt.genSalt(10)
    if (!salt) throw Error('Something went wrong with bcrypt')

    const hash = await bcrypt.hash(password, salt)
    if (!hash) throw Error('Something went wrong hashing the password')

    const newUser = new User({
      name,
      email,
      password: hash,
    })

    const savedUser = await newUser.save()
    if (!savedUser) throw Error('Something went wrong saving the user')

    const token = jwt.sign({ id: savedUser._id }, JWT_SECRET, {
      expiresIn: 3600,
    })

    res.status(200).json({
      token,
      user: {
        id: savedUser.id,
        name: savedUser.name,
        email: savedUser.email,
      },
    })
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
})

export default registerRoute
