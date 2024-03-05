// TODO: update user
// TODO: get users
// TODO: get user by id
const { User } = require('../models');
// TODO - require auth middleware

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
  async updateUser({ body, params }, res) {
    try {
      const user = await User.update(body, {
        where: { id: params.id },
      });
      if (!user) {
        return res.status(404).json({ message: 'No user found' });
      }
      res.status(202).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // get users
  // get user by id
};
