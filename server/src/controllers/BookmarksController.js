const { Bookmark } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let bookmarks = null
      const { songId, userId } = req.query
      if (songId) {
        bookmarks = await Bookmark.findOne({
          where: {
            SongId: songId,
            UserId: userId
          }
        })
      }
      res.send(bookmarks || { message: 'no bookmarks found' })
    } catch (error) {
      res.status(500).send({
        error: 'Unable to serve song data',
        debug: error
      })
    }
  }
}
