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
    // TEST add is_attending????
    is_attending: {
      type: DataTypes.ENUM,
      values: ['yes', 'no', 'needs rsvp'],
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'eventguest',
  }
);

module.exports = EventGuest;
