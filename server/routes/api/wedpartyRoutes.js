const router = require('express').Router();
const { authMiddleware } = require('../../utils/auth');
const {
  wedPartyControllers: {
    createMember,
    updateMember,
    deleteMember,
    getMembers,
    getMemberById,
  },
} = require('../../controllers');

// /api/weddingparty/
router.route('/').get(getMembers).post(authMiddleware, createMember);
// /api/weddingparty/:id
router
  .route('/:id')
  .get(getMemberById)
  .put(authMiddleware, updateMember)
  .delete(authMiddleware, deleteMember);

module.exports = router;
