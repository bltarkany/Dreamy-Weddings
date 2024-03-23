const router = require('express').Router();
const { authMiddleware } = require('../../utils/auth');
const {
  userControllers: { signUp, login, updateUser, getUsers, getUserById },
} = require('../../controllers');

// /api/users/
router.route('/').get(getUsers).post(signUp);
// /api/users/login
router.route('/login').post(login);
// /api/users/:id
router
  .route('/:id')
  .get(authMiddleware, getUserById)
  .put(authMiddleware, updateUser);

module.exports = router;
