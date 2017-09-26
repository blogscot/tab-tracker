const { History, Song } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const { userId } = req.query
      const history = await History.findAll({
        where: {
          UserId: userId
        },
        include: [{ model: Song }]
      })
        .map(history => history.toJSON())
        .map(history => Object.assign({}, history.Song, history))
      res.send(history)
    } catch (error) {
      res.status(500).send({
        error: 'Unable to serve history data',
        debug: error
      })
    }
  },
  async post (req, res) {
    try {
      const { userId, songId } = req.body
      const newHistory = await History.create({
        UserId: userId,
        SongId: songId
      })
      res.send(newHistory)
    } catch (error) {
      res.status(500).send({
        error: 'Post: Unable to create a history entry'
      })
    }
  }
}
