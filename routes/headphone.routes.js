const mongoose = require('mongoose');
const express = require('express');
const Headphone = require('../models/headphone.model');
const router = express.Router();

router.get('/', (req, res) => {
  Headphone.find()
    .then(catalog => {
      res.json(catalog);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
