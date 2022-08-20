const express = require('express');
const Tv = require('../models/tv.model');
const router = express.Router();

router.get('/', (req, res) => {
  Tv.find()
    .then(catalog => {
      res.json(catalog);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
