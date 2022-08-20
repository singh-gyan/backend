const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
  Image: { type: 'string', required: true },
  Price: { type: 'string', required: true },
  Title: { type: 'string', required: true },
});
const tvSchema = new Schema({
  id: { type: 'number', required: true },
  company: { type: 'string', required: true },
  items: [productSchema],
});

const Tv = mongoose.model('Tv', tvSchema);

module.exports = Tv;
