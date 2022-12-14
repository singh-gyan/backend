const mongoose = require('mongoose');
const express = require('express');
const Catalog = require('../models/catalog.model');
const router = express.Router();

router.get('/', (req, res) => {
  Catalog.find()
    .then(catalog => {
      res.json(catalog);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
