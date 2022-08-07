const mongoose = require('mongoose');
const express = require('express');
const Guitar = require('../models/guitar.model');
const router = express.Router();

router.get('/', (req, res) => {
  Guitar.find()
    .then(catalog => {
      res.json(catalog);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
