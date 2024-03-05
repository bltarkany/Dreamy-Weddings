const { Event } = require('../models');

module.exports = {
  // TODO: create event
  async createEvent({ user, body }, res) {
    try {
      const event = await Event.create(body);
      res.status(201).json(event);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // TODO: update event
  async updateEvent({ user, body, params }, res) {
    try {
      const event = await Event.update(body, {
        where: { id: params.id },
      });
      if (!event) {
        return res.status(404).json({ message: 'No event found.' });
      }
      res.status(202).json(event);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // TODO: delete event
  // TODO: get all events
  // TODO: get single event
  // TODO: get event with guest count
};
