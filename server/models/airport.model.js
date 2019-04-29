const mongoose = require('mongoose');

const DbSchema = new mongoose.Schema({

    name: {
        type: String
    },
    country: {
        type: String
    },
    icao: {
        type: String
    },
    latitude: {
        type: Number
    },
    longitude: {
        type: Number
    },
    elevation: {
        type: Number
    },
    longest_runway: {
        type: Number
    },
    magnetic_variation: {
        type: Number
    },
    airport_type: {
        type: String
    },
    beacon: {
        type: String
    },
    fuel_types: {
        type: String
    },
    landing_fee: {
        type: Boolean
    },
    oxygen: {
        type: String
    },
    repairs: {
        type: String
    }
}, {
        versionKey: false
    });


module.exports = mongoose.model('airports', DbSchema);
