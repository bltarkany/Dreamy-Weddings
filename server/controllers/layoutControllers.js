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
  async getByPage({ user, params }, res) {
    try {
      const layouts = await Layout.findAll({
        where: {
          page: params.page,
        },
      });
      if (!layouts) {
        return res.status(404).json({ message: 'No layouts for this page' });
      }
      res.status(200).json(layouts);
    } catch (error) {
      res.status(500).json();
    }
  },
  // TODO - create layout
  async createLayout({ user, body }, res) {
    try {
      const layout = await Layout.create(body);
      res.status(201).json(layout);
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
