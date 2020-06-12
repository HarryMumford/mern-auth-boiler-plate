import { Router } from 'express'
import User from '../../models/User'
import auth from '../../middleware/auth'

const userRoute = Router()

/**
 * @route   GET auth/user
 * @desc    Get user data
 * @access  Private
 */

userRoute.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password')
    if (!user) throw Error('User Does not exist')
    res.json(user)
  } catch (e) {
    res.status(400).json({ msg: e.message })
  }
})

export default userRoute
