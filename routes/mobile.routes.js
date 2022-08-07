const mongoose = require('mongoose');
const express = require('express');
const Mobile = require('../models/mobile.model');
const router = express.Router();

router.get('/', (req, res) => {
  Mobile.find()
    .then(catalog => {
      res.json(catalog);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
