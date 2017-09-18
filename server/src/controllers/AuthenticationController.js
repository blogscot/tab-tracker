const jwt = require('jsonwebtoken')

const { User } = require('../models')
const config = require('../config/config')

const login_error = 'There is a problem with the user credentials.'

function jwtSignUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK,
  })
}

module.exports = {
  async register(req, res) {
    try {
      const user = await User.create(req.body)
      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson),
      })
    } catch (err) {
      res.status(400).send({
        error: 'User is already registered',
      })
    }
  },
  async login(req, res) {
    const { email, password } = req.body
    const user = await User.findOne({
      where: {
        email,
      },
    })
    if (!user) {
      return res.status(400).send({
        error: login_error,
      })
    }
    const isPasswordValid = await user.comparePassword(password)
    if (!isPasswordValid) {
      res.status(400).send({
        error: login_error,
      })
    }
    const userJson = user.toJSON()
    res.status(200).send({
      user: userJson,
      token: jwtSignUser(userJson),
    })
  },
}
