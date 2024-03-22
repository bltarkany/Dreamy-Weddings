const router = require('express').Router();
const { authMiddleware } = require('../../utils/auth');
const {
  galleryControllers: {
    createGallery,
    deleteGallery,
    updateGallery,
    getGalleries,
    getGalleryByEvent,
    getGalleryById,
  },
} = require('../../controllers');

// /api/galleries
router.route('/').get(getGalleries).post(authMiddleware, createGallery);
// /api/galleries/:id
router
  .route('/:id')
  .get(getGalleryById)
  .put(authMiddleware, updateGallery)
  .delete(authMiddleware, deleteGallery);
// /api/galleries/event/:id
router.route('/event/:id').get(getGalleryByEvent);

module.exports = router;
