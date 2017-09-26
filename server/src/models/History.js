module.exports = (sequelize, DataTypes) => {
  const History = sequelize.define('History', {})

  History.associate = models => {
    History.belongsTo(models.User)
    History.belongsTo(models.Song)
  }

  return History
}
