const router = require('express').Router();
const { authMiddleware } = require('../../utils/auth');
const {
  layoutControllers: {
    createLayout,
    updateLayout,
    deleteLayout,
    getLayouts,
    getByPage,
  },
} = require('../../controllers');

// /api/layouts/
router
  .route('/')
  .get(authMiddleware, getLayouts)
  .post(authMiddleware, createLayout);
// /api/layouts/:id
router
  .route('/:id')
  .put(authMiddleware, updateLayout)
  .delete(authMiddleware, deleteLayout);
// /api/layouts/page/:page
router.route('/page/:page').get(authMiddleware, getByPage);

module.exports = router;
