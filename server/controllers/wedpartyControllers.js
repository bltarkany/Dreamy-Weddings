const { WedParty } = require('../models');

module.exports = {
  // TODO: create wedding party member
  async createMember({ user, body }, res) {
    try {
      const member = await WedParty.create(body);
      res.status(201).json(member);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // TODO: update party member
  // TODO: delete party member
  // TODO: get all party
  // TODO: get single party member
};
