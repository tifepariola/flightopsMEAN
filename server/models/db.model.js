const mongoose = require('mongoose');

const DbSchema = new mongoose.Schema({
  image_url: {
    type: String,
    required: true
  },
  registration: {
    type: String,
    required: true
    // unique: true
  },
  mtow: {
    type: Number
  },
  max_fuel: {
    type: Number
  },
  max_pax: {
    type: Number
  },
  max_cargo: {
    type: Number
  }
}, {
  versionKey: false
});


module.exports = mongoose.model('aircrafts', DbSchema);
