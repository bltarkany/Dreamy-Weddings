const User = require('./user');
const Event = require('./event');
const Guest = require('./guest');
const EventGuest = require('./event_guest');
const WedParty = require('./weddingparty');
const Gallery = require('./gallery');

// associations
Gallery.belongsTo(Event, {
  foreignKey: 'event_id',
  onDelete: 'SET NULL',
});

Event.hasMany(Gallery, {
  foreignKey: 'event_id',
});

Event.belongsToMany(Guest, {
  foreignKey: 'event_id',
  through: EventGuest,
});

Guest.belongsToMany(Event, {
  foreignKey: 'guest_id',
  through: EventGuest,
});

module.exports = { User, Event, Guest, EventGuest, WedParty, Gallery };
