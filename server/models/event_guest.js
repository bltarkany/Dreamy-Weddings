const { DataTypes, Model } = require('sequelize');

class EventGuest extends Model {}

EventGuest.init(
  {
    id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    event_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'event',
        key: 'id',
      },
    },
    guest_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'guest',
        key: 'id',
      },
    },
    // TODO add is_attending????
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'eventguest',
  }
);

module.exports = EventGuest;
