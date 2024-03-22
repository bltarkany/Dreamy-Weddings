const { Event, Guest, EventGuest } = require('../models');

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
      // TEST - add event guest many to many clean up
      const evtgst = await EventGuest.destroy({
        where: { event_id: params.id },
      });
      console.log(evtgst);
      res.status(200).json({ message: 'Event successfully Deleted' });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // get all events
  async getEvents(req, res) {
    try {
      const events = await Event.findAll({
        include: [
          {
            model: Guest,
            through: EventGuest,
          },
        ],
      });
      res.status(200).json(events);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // get single event
  async getEventById({ params }, res) {
    try {
      const event = await Event.findByPk(params.id, {
        include: [
          {
            model: Guest,
            through: EventGuest,
          },
        ],
      });
      if (!event) {
        return res.status(404).json({ message: 'No event found' });
      }
      res.status(200).json(event);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
