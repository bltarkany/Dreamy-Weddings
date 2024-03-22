const router = require('express').Router();
const { authMiddleware } = require('../../utils/auth');
const {
  evt_gstControllers: { addGuest, removeGuest, guestAttending },
} = require('../../controllers');

// /api/evtguests/
router.route('/').post(authMiddleware, addGuest);
// /api/evtguests/:id
router.route('/:id').put(authMiddleware, guestAttending);
// /api/evtguests/:guestId/removeguest/:eventId
router
  .route('/:guestId/removeguest/:eventId')
  .delete(authMiddleware, removeGuest);

module.exports = router;
