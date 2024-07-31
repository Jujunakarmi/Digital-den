const { User } = require('../../models');
const bcrypt = require('bcrypt');

async function userSignUpController(req, res) {
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
  }

module.exports =userSignUpController