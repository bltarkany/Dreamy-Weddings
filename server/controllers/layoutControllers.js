const { Layout } = require('../models');

module.exports = {
  // TODO - get layouts
  async getLayouts({ user }, res) {
    try {
      const layouts = await Layout.findAll();
      res.status(200).json(layouts);
    } catch (error) {
      res.status(500).json();
    }
  },
  // TODO - get by page
  async namehere({ user }, res) {
    try {
    } catch (error) {
      res.status(500).json();
    }
  },
  // TODO - create layout
  async namehere({ user }, res) {
    try {
    } catch (error) {
      res.status(500).json();
    }
  },
  // TODO - update layout
  async namehere({ user }, res) {
    try {
    } catch (error) {
      res.status(500).json();
    }
  },
  // TODO - delete layout
  async namehere({ user }, res) {
    try {
    } catch (error) {
      res.status(500).json();
    }
  },
};
