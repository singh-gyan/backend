const router = require('express').Router();
const { userModel } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
  const { email, password, name, address, phone } = req.body;
  userModel.find({ email: email }, async (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      if (data.length === 0) {
        let hashpassword = await bcrypt.hash(password, 10);
        userModel.create(
          {
            id: Math.floor(Math.random() * 100),
            email: email,
            password: hashpassword,
            name: name,
            address: address,
            phone: phone,
          },
          (err, data) => {
            if (err) {
              res.status(500).send(err);
            } else {
              res.status(200).send(data);
            }
          }
        );
      } else {
        res.status(401).send('User already exist');
      }
    }
  });
});

module.exports = router;
