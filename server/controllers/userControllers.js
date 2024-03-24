const { User } = require('../models');
//- require auth middleware
const { signToken } = require('../utils/auth');

module.exports = {
  // create user
  async signUp({ body }, res) {
    try {
      const user = await User.create(body);
      // - add auth here
      const token = signToken(user);
      res.status(201).json({ token, user });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // login user
  async login({ body }, res) {
    try {
      const user = await User.findOne({ email: body.email });
      if (!user) {
        return res.status(404).json({ message: 'Provided email is invalid.' });
      }
      const validPW = user.isValid(body.password);
      if (!validPW) {
        return res
          .status(401)
          .json({ message: 'Provided password does not match our records' });
      }
      // TODO - add auth here
      res.status(202).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // update user
  async updateUser({ body, user }, res) {
    try {
      const userData = await User.update(body, {
        where: { id: user.id },
      });
      if (!userData) {
        return res.status(404).json({ message: 'No user found' });
      }
      res.status(202).json(userData);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // get users
  async getUsers(req, res) {
    try {
      const users = await User.findAll({
        attributes: { exclude: ['password'] },
      });
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // get user by id
  async getUserById({ user }, res) {
    try {
      const userData = await User.findByPk(user.id, {
        attributes: { exclude: ['password'] },
      });
      if (!userData) {
        return res.status(404).json({ message: 'No user found' });
      }
      res.status(202).json(userData);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
