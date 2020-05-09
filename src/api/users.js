const express = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')

const router = express.Router()

const User = require('../models/User')

// @route POST api/users
// @desc register new user
// @access public

router.post('/user', (req, res) => {
  console.log(req.body)
  const { name, email, password } = req.body

  if (!name || !password || !email) {
    res.status(400).json({ msg: 'Please enter all fields' })
  }

  User.findOne({ email }).then((user) => {
    if (user) return res.status(400).json({ msg: 'User already exists' })

    const newUser = new User({
      name,
      email,
      password,
    })

    bcrypt.genSalt(10, (err1, salt) => {
      bcrypt.hash(newUser.password, salt, (err2, hash) => {
        if (err2) throw err2
        newUser.password = hash
        newUser.save().then((u) => {
          jwt.sign(
            { id: u.id },
            config.get('jwtSecret'),
            { expiresIn: 3600 },
            (err3, token) => {
              if (err3) throw err3
              res.json({
                token,
                user: {
                  id: u.id,
                  name: u.name,
                  email: u.email,
                },
              })
            }
          )
        })
      })
    })
  })
})

module.exports = router
