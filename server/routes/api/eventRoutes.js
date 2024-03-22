const router = require('express').Router();
const { authMiddleware } = require('../../utils/auth');
const {
  eventControllers: {
    createEvent,
    updateEvent,
    deleteEvent,
    getEvents,
    getEventById,
  },
} = require('../../controllers');

// /api/events
router.route('/').get(getEvents).post(authMiddleware, createEvent);
// /api/events/:id
router
  .route('/:id')
  .get(getEventById)
  .put(authMiddleware, updateEvent)
  .delete(authMiddleware, deleteEvent);

module.exports = router;
