const router = require('express').Router();
const { authMiddleware } = require('../../utils/auth');
const {
  guestControllers: {
    createGuest,
    updateGuest,
    deleteGuest,
    getGuests,
    getGuestbyId,
  },
} = require('../../controllers');

// /api/guests
router
  .route('/')
  .get(authMiddleware, getGuests)
  .post(authMiddleware, createGuest);
// /api/guests/:id
router
  .route('/:id')
  .get(authMiddleware, getGuestbyId)
  .put(authMiddleware, updateGuest)
  .delete(authMiddleware, deleteGuest);

module.exports = router;
