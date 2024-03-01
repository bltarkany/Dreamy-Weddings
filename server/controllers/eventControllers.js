const { Event } = require('../models');

module.exports = {
  // create event
  async createEvent({ user, body }, res) {
    try {
      const event = await Event.create(body);
      res.status(201).json(event);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // update event
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
  // delete event
  async deleteEvent({ user, params }, res) {
    try {
      const event = await Event.destroy({
        where: { id: params.id },
      });
      if (!event) {
        return res.status(404).json({ message: 'No event found' });
      }
      // TODO - add event guest many to many clean up
      res.status(200).json({ message: 'Event successfully Deleted' });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // get all events
  async getEvents({ user }, res) {
    try {
      const events = await Event.findAll();
      res.status(200).json(events);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // TODO: get single event
  // TODO: get event with guest count
};
