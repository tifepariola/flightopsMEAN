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
router.get('/find/:keyword', function (req, res) {
    Airport.find({ $or: [{ icao: { $regex: req.params.keyword, $options: 'i' } }, { name: { $regex: req.params.keyword, $options: 'i' } }] }, function (err, airport) {
        if (err) {
            console.log(err);
        } else {
            res.json(airport);
        }
    })
});



async function insert(req, res) {
    let airport = await airportCtrl.insert(req.body);
    res.json(airport);
}
async function fetch(req, res) {
    let airport = await airportCtrl.fetch();
    res.json(airport);
}
