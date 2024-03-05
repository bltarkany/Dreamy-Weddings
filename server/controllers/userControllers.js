// TODO: login user
// TODO: update user
// TODO: get users
// TODO: get user by id
const { User } = require('../models');

module.exports = {
  // create user
  async signUp({ body }, res) {
    try {
      const user = await User.create(body);
      // TODO - add auth here

      res.status(201).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // login user
  async login({ body }, res) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // update user
  // get users
  // get user by id
};
