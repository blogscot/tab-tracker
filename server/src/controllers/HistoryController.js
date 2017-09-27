const { History, Song } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const UserId = req.user.id
      console.log(`USERID ${UserId}`)
      const history = await History.findAll({
        where: { UserId },
        group: ['SongId'],
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
      const UserId = req.user.id
      const { songId: SongId } = req.body
      const newHistory = await History.create({ UserId, SongId })
      res.send(newHistory)
    } catch (error) {
      res.status(500).send({
        error: 'Post: Unable to create a history entry'
      })
    }
  }
}
