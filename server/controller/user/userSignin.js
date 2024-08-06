const bcrypt = require('bcrypt')
const { User } = require('../../models');
const jwt = require('jsonwebtoken');

async function userSignInController(req, res) {
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
          const token = jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: '8h' });
    
          // Save token in cookie
          res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' })
             .status(200)
             .json({ success: true, user });
    
        } catch (err) {
          console.error('Error during login:', err);
          res.status(500).json({ success: false, message: 'Internal server error' });
        }
      }


module.exports = userSignInController