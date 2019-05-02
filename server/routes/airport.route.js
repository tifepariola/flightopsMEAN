const express = require('express');
// const passport = require('passport');
const asyncHandler = require('express-async-handler');
const airportCtrl = require('../controllers/airport.controller');
const Airport = require('../models/airport.model');

const router = express.Router();
module.exports = router;

// router.use(passport.authenticate('jwt', { session: false }))

router.route('/')
    .post(asyncHandler(insert));
router.get('/fetchs', asyncHandler(fetch));
router.get('/fetch/:pageNo/:size', function (req, res) {
    var pageNo = parseInt(req.params.pageNo)
    var size = parseInt(req.params.size)
    var query = {}
    if (pageNo < 0 || pageNo === 0) {
        response = { "error": true, "message": "invalid page number, should start with 1" };
        return res.json(response)
    }
    query.skip = size * (pageNo - 1)
    query.limit = size
    Airport.find({}, {}, query, function (err, airports) {
        if (err) {
            console.log(err);
        } else {
            res.json(airports);
        }
    })
});
router.get('/fetch/:icao', function (req, res) {
    Airport.find({ icao: req.params.icao }, function (err, airport) {
        if (err) {
            console.log(err);
        } else {
            res.json(airport);
        }
    })
});
router.get('/fetchAirport/:icao', function (req, res) {
    Airport.findOne({ icao: req.params.icao }, function (err, airport) {
        if (err) {
            console.log(err);
        } else {
            res.json(airport);
        }
    })
});
router.get('/find/:keyword', function (req, res) {
    Airport.find({ $or: [{ icao: { $regex: req.params.keyword, $options: 'i' } }, { name: { $regex: req.params.keyword, $options: 'i' } }] }, function (err, airport) {
        if (err) {
            console.log(err);
        } else {
            res.json(airport);
        }
    })
});
router.put('/update/:id', function (req, res) {
    Airport.findOne({ _id: req.params.id }, function (err, doc) {
        doc.name = req.body.name;
        doc.country = req.body.country;
        doc.icao = req.body.icao;
        doc.latitude = req.body.latitude;
        doc.longitude = req.body.longitude;
        doc.elevation = req.body.elevation;
        doc.longest_runway = req.body.longest_runway;
        doc.magnetic_variation = req.body.magnetic_variation;
        doc.airport_type = req.body.airport_type;
        doc.beacon = req.body.beacon;
        doc.fuel_types = req.body.fuel_types;
        doc.landing_fee = req.body.landing_fee;
        doc.oxygen = req.body.oxygen;
        doc.repairs = req.body.repairs;
        // // doc.visits.$inc();
        doc.save();
        if (err) {
            console.log(err);
        } else {
            res.json(doc);
        }
    });
});
router.delete('/delete/:id', function (req, res) {
    Airport.findOne({ _id: req.params.id }, function (err, doc) {
        doc.remove();
        if (err) {
            console.log(err);
        } else {
            res.json("deleted");
        }
    });
});



async function insert(req, res) {
    let airport = await airportCtrl.insert(req.body);
    res.json(airport);
}
async function fetch(req, res) {
    let airport = await airportCtrl.fetch();
    res.json(airport);
}
