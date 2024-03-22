const router = require('express').Router();
const { authMiddleware } = require('../../utils/auth');
const {
  evt_gstControllers: { addGuest, removeGuest, guestAttending },
} = require('../../controllers');

// /api/evtguests/
router.route('/').post(authMiddleware, addGuest);
// /api/evtguests/:id
router
  .route('/:id')
  .put(authMiddleware, guestAttending)
  .delete(authMiddleware, removeGuest);

module.exports = router;
