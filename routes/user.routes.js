const router = require('express').Router();
const User = require('../models/user.model');
const { authenticateToken } = require('../utils/middlewares');

router.get('/', authenticateToken, (req, res) => {
  User.findOne({ email: req.user.email })
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
