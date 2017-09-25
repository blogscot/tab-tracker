module.exports = (sequelize, DataTypes) => {
  const Bookmark = sequelize.define('Bookmark', {})

  Bookmark.associate = models => {
    Bookmark.belongsTo(models.User)
    Bookmark.belongsTo(models.Song)
  }

  return Bookmark
}
