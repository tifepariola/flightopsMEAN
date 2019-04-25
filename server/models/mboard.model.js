const mongoose = require('mongoose');

const DbSchema = new mongoose.Schema({
  route_id: {
    type: String,
  },
  message: {
    type: String,
  },
  usergroup: {
    type: String
  }
}, {
  versionKey: false
});


module.exports = mongoose.model('mboard', DbSchema);
