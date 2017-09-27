const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy.js')
const SongsController = require('./controllers/SongsController.js')
const BookmarksController = require('./controllers/BookmarksController')
const HistoryController = require('./controllers/HistoryController')
const isAuthenticated = require('./policies/isAuthenticated')

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

  app.get('/bookmark', isAuthenticated, BookmarksController.index)
  app.post('/bookmark', isAuthenticated, BookmarksController.post)
  app.delete(
    '/bookmark/:bookmarkId',
    isAuthenticated,
    BookmarksController.delete
  )

  app.get('/history', HistoryController.index)
  app.post('/history', HistoryController.post)
}
