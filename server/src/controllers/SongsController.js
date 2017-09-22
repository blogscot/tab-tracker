const { Song } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let songs = null
      const { search } = req.query
      if (search) {
        songs = await Song.findAll({
          where: {
            $or: ['title', 'artist', 'genre', 'album'].map(key => ({
              [key]: {
                $like: `%${search}%`
              }
            }))
          }
        })
      } else {
        songs = await Song.findAll({
          limit: 10
        })
      }
      res.send(songs)
    } catch (error) {
      res.status(500).send({
        error: 'Unable to serve song data',
        debug: error
      })
    }
  },
  async show (req, res) {
    try {
      const song = await Song.findById(req.params.songId)
      res.send(song)
    } catch (error) {
      res.status(500).send({
        error: 'Show: Unable to serve song data'
      })
    }
  },
  async post (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (error) {
      res.status(500).send({
        error: 'Post: Unable to create song entry'
      })
    }
  },
  async update (req, res) {
    const song = req.body
    const id = req.params.songId
    try {
      await Song.update(song, { where: { id } })
      res.status(200).send({
        message: 'ok'
      })
    } catch (error) {
      res.status(500).send({
        error: 'Update: Unable to update song entry',
        debug: error
      })
    }
  }
}
