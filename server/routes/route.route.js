const express = require('express');
// const passport = require('passport');
const asyncHandler = require('express-async-handler');
const routeCtrl = require('../controllers/route.controller');
const Route = require('../models/route.model');

const router = express.Router();
module.exports = router;

// router.use(passport.authenticate('jwt', { session: false }))

router.route('/')
    .post(asyncHandler(insert));
router.get('/fetchs', asyncHandler(fetch));
router.get('/fetch', function (req, res) {
    Route.find({}, function (err, routes) {
        if (err) {
            console.log(err);
        } else {
            res.json(routes);
        }
    })
});
router.get('/fetch/:id', function (req, res) {
    Route.findById(req.params.id, function (err, route) {
        if (err) {
            console.log(err);
        } else {
            res.json(route);
        }
    })
});
router.get('/fetchAircraft/:aircraftid', function (req, res) {
    Route.find({ aircraft: req.params.aircraftid }, function (err, route) {
        if (err) {
            console.log(err);
        } else {
            res.json(route);
        }
    })
});
router.get('/lastLiveFlight/:aircraftid/:date', function (req, res) {
    var cutoff = new Date();
    Route.find({ aircraft: req.params.aircraftid, type: 'live', arrivaltime: {$lte: req.params.date} }, {}, { limit: 1, sort: {'arrivaltime': -1} }, function (err, route) {
        if (err) {
            console.log(err);
        } else {
            console.log(cutoff)
            res.json(route);
        }
    })
});
router.delete('/delete/:id', function (req, res) {
    Route.find({ reference_id: req.params.id }, function (err, doc) {
        doc.remove();
        if (err) {
            console.log(err);
        } else {
            res.json("deleted");
        }
    });
});
router.get('/checkOverlap/:aircraftid/:departure/:arrival', function (req, res) {
    var cutoff = new Date();
    Route.find({ aircraft: req.params.aircraftid, $or: [{departuretime: {$gte: req.params.departure, $lte: req.params.arrival}}, {arrivaltime: {$gte: req.params.departure, $lte: req.params.arrival}}]}, {}, { limit: 1, sort: {'departuretime': 1} }, function (err, route) {
        if (err) {
            console.log(err);
        } else {
            console.log(cutoff)
            res.json(route);
        }
    })
});
router.get('/nextLiveFlight/:aircraftid/:date', function (req, res) {
    var cutoff = new Date();
    Route.find({ aircraft: req.params.aircraftid, type: 'live', departuretime: {$gte: req.params.date} }, {}, { limit: 1, sort: {'departuretime': 1} }, function (err, route) {
        if (err) {
            console.log(err);
        } else {
            console.log(cutoff)
            res.json(route);
        }
    })
});
router.get('/fetchOPS/:ops', function (req, res) {
    Route.find({ ops_crew: req.params.ops }, function (err, route) {
        if (err) {
            console.log(err);
        } else {
            res.json(route);
        }
    })
});
router.get('/fetchPIC/:pic', function (req, res) {
    Route.find({ pic_crew: req.params.pic }, function (err, route) {
        if (err) {
            console.log(err);
        } else {
            res.json(route);
        }
    })
});
router.get('/fetchFO/:fo', function (req, res) {
    Route.find({ fo_crew: req.params.fo }, function (err, route) {
        if (err) {
            console.log(err);
        } else {
            res.json(route);
        }
    })
});
router.put('/updateFiled/:id', function (req, res) {
    Route.findOne({ _id: req.params.id }, function (err, doc) {
        doc.filed = req.body.filed;
        // // doc.visits.$inc();
        doc.save();
        if (err) {
            console.log(err);
        } else {
            res.json(doc);
        }
    });
});



async function insert(req, res) {
    let route = await routeCtrl.insert(req.body);
    res.json(route);
}
async function fetch(req, res) {
    let route = await routeCtrl.fetch();
    res.json(route);
}
