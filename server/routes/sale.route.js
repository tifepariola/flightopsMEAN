const express = require('express');
// const passport = require('passport');
const asyncHandler = require('express-async-handler');
const saleCtrl = require('../controllers/sale.controller');
const Sale = require('../models/sale.model');

const router = express.Router();
module.exports = router;

// router.use(passport.authenticate('jwt', { session: false }))

router.route('/')
    .post(asyncHandler(insert));
router.get('/fetchs', asyncHandler(fetch));
router.get('/fetch', function (req, res) {
    Sale.find({}, function (err, sales) {
        if (err) {
            console.log(err);
        } else {
            res.json(sales);
        }
    })
});
router.get('/fetch/:id', function (req, res) {
    Sale.findById(req.params.id, function (err, sale) {
        if (err) {
            console.log(err);
        } else {
            res.json(sale);
        }
    })
});
router.put('/update/:id', function (req, res) {
    Sale.findOne({ _id: req.params.id }, function (err, doc) {
        doc.company_name = req.body.company_name;
        doc.contact_name = req.body.contact_name;
        doc.contact_phone = req.body.contact_phone;
        doc.contact_email = req.body.contact_email;
        doc.weight = req.body.weight;
        doc.dangerous = req.body.dangerous;
        doc.description = req.body.description;
        doc.instructions = req.body.instructions;
        doc.origin_airport = req.body.origin_airport;
        doc.destination_airport = req.body.destination_airport;
        doc.departure = req.body.departure;
        doc.reference_id = req.body.reference_id;
        doc.estimated_cost = req.body.estimated_cost;
        doc.price_charged = req.body.price_charged;
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
    Sale.findOne({ _id: req.params.id }, function (err, doc) {
        doc.remove();
        if (err) {
            console.log(err);
        } else {
            res.json("deleted");
        }
    });
});



async function insert(req, res) {
    let sale = await saleCtrl.insert(req.body);
    res.json(sale);
}
async function fetch(req, res) {
    let sale = await saleCtrl.fetch();
    res.json(sale);
}
