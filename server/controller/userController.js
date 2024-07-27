const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  async createUser(req, res) {
    try {
      // Hash the password before creating the user
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      // Create a new user with the hashed password
      const user = await User.create({ ...req.body, password: hashedPassword });
      res.status(201).json({ success: true, user });
    } catch (err) {
      console.error('Error creating user:', err);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }

      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return res.status(401).json({ success: false, message: 'Invalid password' });
      }

      // Create a token
      const tokenData = {
        _id: user._id,
        email: user.email
      };
      const token = jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: '1h' });

      // Save token in cookie
      res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' })
         .status(200)
         .json({ success: true, user });

    } catch (err) {
      console.error('Error during login:', err);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  }
};
