const mongoose = require('mongoose');

const DbSchema = new mongoose.Schema({

  aircraft: {
    type: Number,
    required: true
    // unique: true
  }
}, {
    versionKey: false
  });


module.exports = mongoose.model('aircrafts', DbSchema);
