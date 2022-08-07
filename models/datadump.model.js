const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dumpSchema = new Schema({
  _id: { type: 'string', required: true },
  Image: { type: 'array', required: true },
  Price: { type: 'array', require: true },
  Title: { type: 'array', required: true },
});

const Dump = mongoose.model('DataDumps', dumpSchema);
module.exports = Dump;
