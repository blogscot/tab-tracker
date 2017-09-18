const { User } = require('../models')

const login_error = 'There is a problem with the user credentials.'

module.exports = {
  async register(req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
      res.status(400).send({
        error: login_error,
      })
    }
  },
  async login(req, res) {
    const { email, password } = req.body
    const user = await User.findOne({
      where: {
        email,
        password,
      },
    })
    if (!user) {
      return res.status(400).send({
        error: login_error,
      })
    }
    const isPasswordValid = password === user.password
    if (!isPasswordValid) {
      res.status(400).send({
        error: login_error,
      })
    }

    res.status(200).send({
      user: user.toJSON(),
    })
  },
}
