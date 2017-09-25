const { Bookmark } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let bookmark = null
      const { songId, userId } = req.query
      if (songId) {
        bookmark = await Bookmark.findOne({
          where: {
            SongId: songId,
            UserId: userId
          }
        })
      }
      res.send(bookmark)
    } catch (error) {
      res.status(500).send({
        error: 'Unable to serve song data',
        debug: error
      })
    }
  },
  async post (req, res) {
    try {
      const { userId, songId } = req.body
      const bookmarkAlreadyExists = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      if (bookmarkAlreadyExists) {
        // silently ignore repeat requests
        res.status(200).send()
        return
      }
      const newBookmark = await Bookmark.create({
        UserId: userId,
        SongId: songId
      })
      res.send(newBookmark)
    } catch (error) {
      res.status(500).send({
        error: 'Post: Unable to create bookmark entry'
      })
    }
  },
  async delete (req, res) {
    try {
      console.log(req.body)
      const { userId, songId } = req.body
      await Bookmark.destroy({
        where: {
          UserId: userId,
          SongId: songId
        }
      })
      res.status(200).send()
    } catch (error) {
      res.status(500).send({
        error: 'Post: Unable to delete bookmark entry'
      })
    }
  }
}
