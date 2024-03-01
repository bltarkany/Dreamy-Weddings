const { EventGuest } = require('../models');

module.exports = {
  //  add guest to event
  async addGuest({ user, body }, res) {
    try {
      const newGuest = await EventGuest.create(body);
      res.status(201).json({ message: 'Guest added' });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // remove guest from event
  async removeGuest({ user, params }, res) {
    try {
      const guest = await EventGuest.destroy({
        where: {
          event_id: params.event_id,
          guest_id: params.guest_id,
        },
      });
      if (!guest) {
        return res
          .status(404)
          .json({ message: 'Did not find this guest in the event' });
      }
      res.status(200).json({ message: 'Guest removed from event.' });
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
