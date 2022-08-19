const router = require('express').Router();
const { userModel } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

router.post('/', (req, res) => {
  const { email, password } = req.body;
  userModel.find({ email: email }, async (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      if (data.length === 0) {
        res.status(404).send('User not found');
      } else {
        if (await bcrypt.compare(password, data[0].password)) {
          const token = jwt.sign(
            { email: email },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '1h' }
          );
          res.status(200).send({
            access_token: token,
          });
        } else {
          res.status(401).send('Invalid Password');
        }
      }
    }
  });
});

module.exports = router;
