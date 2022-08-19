const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
  id: { type: 'number', required: true },
  email: { type: 'string', required: true },
  password: { type: 'string', required: true },
  name: { type: 'string', required: true },
  address: {
    street: { type: 'string', required: true },
    city: { type: 'string', required: true },
    state: { type: 'string', required: true },
  },
  phone: { type: 'string', required: true },
});
const User = mongoose.model('User', userSchema);
module.exports = User;
