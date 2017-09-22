const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy.js')
const SongsController = require('./controllers/SongsController.js')

module.exports = app => {
  app.post(
    '/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  )
  app.post('/login', AuthenticationController.login)

  app.get('/songs', SongsController.index)
  app.get('/songs/:songId', SongsController.show)
  app.post('/songs', SongsController.post)
  app.post('/song/:songId', SongsController.update)
}
