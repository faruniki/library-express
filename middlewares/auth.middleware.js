const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const auth = async (req, res, next) => {
    try {
      const token = req.header('Authorization').replace('Bearer ', '');
      const decoded = jwt.verify(token, 'your-secret-key');
      const user = await User.findOne({ _id: decoded._id });
      if (!user) {
        throw new Error();
      }
  
      const allowedRoles = ['a', 'p', 'u'];
      if (!allowedRoles.includes(user.role)) {
        throw new Error('Unauthorized');
      }
  
      req.user = user;
      next();
    } catch (error) {
      res.status(401).send({ error: 'Unauthorized' });
    }
  };

module.exports = auth;
