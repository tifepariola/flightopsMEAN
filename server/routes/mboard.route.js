const express = require('express');
// const passport = require('passport');
const asyncHandler = require('express-async-handler');
const mboardCtrl = require('../controllers/mboard.controller');
const Mboard = require('../models/mboard.model');

const router = express.Router();
module.exports = router;

// router.use(passport.authenticate('jwt', { session: false }))

router.route('/')
    .post(asyncHandler(insert));
router.get('/fetchs', asyncHandler(fetch));
router.get('/fetch', function (req, res) {
    Mboard.find({}, function (err, mboards) {
        if (err) {
            console.log(err);
        } else {
            res.json(mboards);
        }
    })
});
router.get('/fetch/:id', function (req, res) {
    Mboard.find({ route_id: req.params.id }, function (err, mboard) {
        if (err) {
            console.log(err);
        } else {
            res.json(mboard);
        }
    })
});



async function insert(req, res) {
    let mboard = await mboardCtrl.insert(req.body);
    res.json(mboard);
}
async function fetch(req, res) {
    let mboard = await mboardCtrl.fetch();
    res.json(mboard);
}
