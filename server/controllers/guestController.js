const { Event, Guest, EventGuest } = require('../models');

module.exports = {
  // TODO: create guest
  async createGuest({ user, body }, res) {
    try {
      const guest = await Guest.create(body);
      res.status(201).json(guest);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // TODO: update guest
  async updateGuest({ user, body, params }, res) {
    try {
      const guest = await Guest.update(body, {
        where: {
          id: params.id,
        },
      });
      if (!guest) {
        return res
          .status(404)
          .json({ message: 'No guest with the selected id.' });
      }
      res.status(201).json(guest);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // TODO: delete guest
  async deleteGuest({ user, params }, res) {
    try {
      const guest = await Guest.destroy({
        where: {
          id: params.id,
        },
      });
      if (!guest) {
        return res
          .status(404)
          .json({ message: 'No guest with the selected id.' });
      }
      res.status(201).json(guest);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // TODO: get all guests
  async getGuests({ user }, res) {
    try {
      const guests = await Guest.findAll();
      res.status(201).json(guests);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // TODO: get one guest
  async getGuestbyId({ user, params }, res) {
    try {
      const guest = await Guest.findByPk(params.id);
      if (!guest) {
        return res
          .status(404)
          .json({ message: 'No guest with the selected id.' });
      }
      res.status(201).json(guest);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // TODO: get guest count
  // async createGuest({user, body}, res){
  //     try {

  //     } catch (error) {
  //         res.status(500).json(error);
  //     }
  // }
};
