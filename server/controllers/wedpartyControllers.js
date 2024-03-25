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
  async updateMember({ user, body, params }, res) {
    try {
      const member = await WedParty.update(body, {
        where: {
          id: params.id,
        },
      });

      if (!member) {
        return res
          .status(404)
          .json({ message: 'No wedding party member found matching this id.' });
      }

      res.status(200).json(member);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // TODO: delete party member
  async deleteMember({ user, params }, res) {
    try {
      const member = await WedParty.destroy({
        where: {
          id: params.id,
        },
      });
      if (!member) {
        return res.status(404).json({
          message: 'No wedding party member found matching this id.',
        });
      }

      res.status(200).json(member);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // TODO: get all party
  async createMember({ user, body }, res) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // TODO: get single party member
  async createMember({ user, body }, res) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
