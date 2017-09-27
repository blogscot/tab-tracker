const { Bookmark, Song } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let bookmarks = null
      const userId = req.user.id
      const { songId } = req.query

      if (songId) {
        bookmarks = await Bookmark.findOne({
          where: {
            SongId: songId,
            UserId: userId
          }
        })
      } else {
        bookmarks = await Bookmark.findAll({
          where: {
            UserId: userId
          },
          include: [{ model: Song }]
        })
          .map(bookmark => bookmark.toJSON())
          .map(bookmark => Object.assign({}, bookmark.Song, bookmark))
      }
      res.send(bookmarks)
    } catch (error) {
      res.status(500).send({
        error: 'Unable to serve bookmark data',
        debug: error
      })
    }
  },
  async post (req, res) {
    try {
      const UserId = req.user.id
      const { songId: SongId } = req.body
      const bookmarkAlreadyExists = await Bookmark.findOne({
        where: { SongId, UserId }
      })
      if (bookmarkAlreadyExists) {
        // silently ignore repeat requests
        res.status(200).send({
          message: 'Ignoring duplicate bookmark request'
        })
        return
      }
      const newBookmark = await Bookmark.create({ UserId, SongId })
      res.send(newBookmark)
    } catch (error) {
      res.status(500).send({
        error: 'Post: Unable to create bookmark entry'
      })
    }
  },
  async delete (req, res) {
    const Error = {
      error: 'Post: Unable to delete bookmark entry'
    }
    try {
      const UserId = req.user.id
      const { bookmarkId: id } = req.params
      const bookmark = await Bookmark.findOne({ where: { id, UserId } })
      if (bookmark) {
        await bookmark.destroy()
        res.status(200).send()
      } else {
        res.status(403).send(Error)
      }
    } catch (error) {
      res.status(500).send(Error)
    }
  }
}
