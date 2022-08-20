const express = require('express');
const Laptop = require('../models/laptop.model');
const router = express.Router();

router.get('/', (req, res) => {
  Laptop.find()
    .then(catalog => {
      res.json(catalog);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
