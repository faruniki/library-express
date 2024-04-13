const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.middleware');

router.get('/', auth, async (req, res) => {
  res.send(req.user);
});

module.exports = router;