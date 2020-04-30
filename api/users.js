const express = require('express');
const router = express.Router()

const User = require('../models/User');

router.get('/', (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => console.log(err))
})

router.post('/user', (req, res) => {
  const newUser = new User({
    name: req.body
  })
  newUser.save()
    .then(() => res.json({
        message: "User added"
    }))
    .catch(err => res.status(400).json({
        "error": err,
        "message": "Error adding user"
    }))
})

module.exports = router 