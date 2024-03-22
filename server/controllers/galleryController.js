const { Gallery } = require('../models');
module.exports = {
  // create gallery item
  async createGallery({ user, body }, res) {
    try {
      const gallery = await Gallery.create(body);
      res.status(201).json(gallery);
    } catch (error) {
      res.status(500).json();
    }
  },
  // delete gallery item
  async deleteGallery({ user, params }, res) {
    try {
      const gallery = await Gallery.destroy({
        where: {
          id: params.id,
        },
      });
      if (!gallery) {
        return res
          .status(404)
          .json({ message: 'No gallery found by that id.' });
      }
      res.status(201).json(gallery);
    } catch (error) {
      res.status(500).json();
    }
  },
  // update gallery item
  async updateGallery({ user, body, params }, res) {
    try {
      const gallery = await Gallery.update(body, {
        where: {
          id: params.id,
        },
      });
      if (!gallery) {
        return res
          .status(404)
          .json({ message: 'No gallery found by that id.' });
      }
      res.status(201).json(gallery);
    } catch (error) {
      res.status(500).json();
    }
  },
  // get all gallery items
  async getGalleries(req, res) {
    try {
      const galleries = await Gallery.findAll();
      res.status(201).json(galleries);
    } catch (error) {
      res.status(500).json();
    }
  },
  // get galley items by event
  async getGalleryByEvent({ params }, res) {
    try {
      const galleries = await Gallery.findAll({
        where: {
          event_id: params.id,
        },
      });
      res.status(201).json(galleries);
    } catch (error) {
      res.status(500).json();
    }
  },
  // get single gallery item
  async getGalleryById({ params }, res) {
    try {
      const gallery = await Gallery.findByPk(params.id);
      if (!gallery) {
        return res
          .status(404)
          .json({ message: 'No gallery found by that id.' });
      }
      res.status(201).json(gallery);
    } catch (error) {
      res.status(500).json();
    }
  },
};
