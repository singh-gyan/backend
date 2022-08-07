const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const catalogSchema = new Schema({
  id: { type: 'number', required: true },
  category: { type: 'string', required: true },
});

const Catalog = mongoose.model('Catalog', catalogSchema);

module.exports = Catalog;
