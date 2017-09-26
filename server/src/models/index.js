const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

// Bookmark and History depend on Song, and User
// so import it last
;['Song.js', 'User.js', 'Bookmark.js', 'History.js'].forEach(file => {
  const filename = path.join(__dirname, file)
  const model = sequelize.import(filename)
  db[model.name] = model
})

Object.keys(db).forEach(modelName => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
