const express = require('express');
// const passport = require('passport');
const asyncHandler = require('express-async-handler');
const crewCtrl = require('../controllers/crew.controller');
const Crew = require('../models/crew.model');

const router = express.Router();
module.exports = router;

// router.use(passport.authenticate('jwt', { session: false }))

router.route('/')
    .post(asyncHandler(insert));
router.get('/fetchs', asyncHandler(fetch));
router.get('/fetch', function (req, res) {
    Crew.find({}, function (err, crews) {
        if (err) {
            console.log(err);
        } else {
            res.json(crews);
        }
    })
});
router.get('/fetch/:id', function (req, res) {
    Crew.findById(req.params.id, function (err, crew) {
        if (err) {
            console.log(err);
        } else {
            res.json(crew);
        }
    })
});
router.get('/fetchUser/:id', function (req, res) {
    Crew.find({user_id: req.params.id}, function (err, crew) {
        if (err) {
            console.log(err);
        } else {
            res.json(crew);
        }
    })
});
router.get('/fetchType/:occupation', function (req, res) {
    Crew.find({ occupation: req.params.occupation }, function (err, crew) {
        if (err) {
            console.log(err);
        } else {
            res.json(crew);
        }
    })
});
router.put('/update/:id', function (req, res) {
    Crew.findOne({ _id: req.params.id }, function (err, doc) {
        doc.unavailableFrom = req.body.unavailableFrom;
        doc.unavailableTo = req.body.unavailableTo;
        // // doc.visits.$inc();
        doc.save();
        if (err) {
            console.log(err);
        } else {
            res.json(doc);
        }
    });
});
router.put('/updateCrew/:id', function (req, res) {
    Crew.findOne({ _id: req.params.id }, function (err, doc) {
        doc.img_url = req.body.img_url;
        doc.name = req.body.name;
        doc.occupation = req.body.occupation;
        doc.p_email = req.body.p_email;
        doc.s_email = req.body.s_email;
        doc.p_phone = req.body.p_phone;
        doc.s_phone = req.body.s_phone;
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
    Crew.findOne({ _id: req.params.id }, function (err, doc) {
        doc.remove();
        if (err) {
            console.log(err);
        } else {
            res.json("deleted");
        }
    });
});



async function insert(req, res) {
    let crew = await crewCtrl.insert(req.body);
    res.json(crew);
}
async function fetch(req, res) {
    let crew = await crewCtrl.fetch();
    res.json(crew);
}
