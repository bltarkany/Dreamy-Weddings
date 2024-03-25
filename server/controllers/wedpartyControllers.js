const { WedParty } = require('../models');

module.exports = {
  // create wedding party member
  async createMember({ user, body }, res) {
    try {
      const member = await WedParty.create(body);
      res.status(201).json(member);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // update party member
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
  // delete party member
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
  // get all party
  async getMembers({ user }, res) {
    try {
      const members = await WedParty.findAll();
      res.status(200).json(members);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // get single party member
  async getMemberById({ user, params }, res) {
    try {
      const member = await WedParty.findByPk(params.id);
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
};
