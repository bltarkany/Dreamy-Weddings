const { Gallery } = require('../models');
module.exports = {
  // TODO: create gallery item
  async createGallery({ user, body }, res) {
    try {
      const gallery = await Gallery.create(body);
      res.status(201).json(gallery);
    } catch (error) {
      res.status(500).json();
    }
  },
  // TODO: delete gallery item
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
  // TODO: update gallery item
  async updateGallery({ user }, res) {
    try {
    } catch (error) {
      res.status(500).json();
    }
  },
  // TODO: get all gallery items
  async getGalleries({ user }, res) {
    try {
    } catch (error) {
      res.status(500).json();
    }
  },
  // TODO: get galley items by event
  async getGalleryByEvent({ user }, res) {
    try {
    } catch (error) {
      res.status(500).json();
    }
  },
  // TODO: get single gallery item
  async getGalleryById({ user }, res) {
    try {
    } catch (error) {
      res.status(500).json();
    }
  },
};
