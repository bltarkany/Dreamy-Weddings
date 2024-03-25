const { Layout } = require('../models');

module.exports = {
  // - get layouts
  async getLayouts({ user }, res) {
    try {
      const layouts = await Layout.findAll();
      res.status(200).json(layouts);
    } catch (error) {
      res.status(500).json();
    }
  },
  // - get by page
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
  // - create layout
  async createLayout({ user, body }, res) {
    try {
      const layout = await Layout.create(body);
      res.status(201).json(layout);
    } catch (error) {
      res.status(500).json();
    }
  },
  // - update layout
  async updateLayout({ user, body, params }, res) {
    try {
      const layout = await Layout.update(body, {
        where: {
          page: params.id,
        },
      });
      if (!layout) {
        return res
          .status(404)
          .json({ message: 'No layout found with this id' });
      }
      res.status(200).json(layout);
    } catch (error) {
      res.status(500).json();
    }
  },
  // - delete layout
  async deleteLayout({ user, params }, res) {
    try {
      const layout = await Layout.destroy({
        where: {
          page: params.id,
        },
      });
      if (!layout) {
        return res
          .status(404)
          .json({ message: 'No layout found with this id' });
      }
      res.status(200).json(layout);
    } catch (error) {
      res.status(500).json();
    }
  },
};
