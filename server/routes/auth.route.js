const express = require('express');
const asyncHandler = require('express-async-handler')
const passport = require('passport');
const userCtrl = require('../controllers/user.controller');
const authCtrl = require('../controllers/auth.controller');
const User = require('../models/user.model');
const config = require('../config/config');
const bcrypt = require('bcrypt');

const router = express.Router();
module.exports = router;

router.post('/register', asyncHandler(register), login);
router.post('/login', passport.authenticate('local', { session: false }), login);
router.get('/me', passport.authenticate('jwt', { session: false }), login);
router.get('/fetch', function (req, res) {
  User.find({}, function (err, users) {
    if (err) {
      console.log(err);
    } else {
      res.json(users);
    }
  })
});
router.get('/fetch/:id', function (req, res) {
  User.findById(req.params.id, function (err, users) {
    if (err) {
      console.log(err);
    } else {
      res.json(users);
    }
  })
});
router.put('/update/:id', function (req, res) {
  User.findOne({ _id: req.params.id }, function (err, doc) {
    doc.fullname = req.body.fullname;
    doc.email = req.body.email;
    if (req.body.password !== '') {
      doc.hashedPassword = bcrypt.hashSync(req.body.password, 10);
    }
    // // doc.visits.$inc();
    doc.save();
    if (err) {
      console.log(err);
    } else {
      var resp = {
        fullname: doc.fullname,
        email: doc.email
      }
      res.json(resp);
    }
  });
});

router.delete('/delete/:id', function (req, res) {
  User.findOne({ _id: req.params.id }, function (err, doc) {
      doc.remove();
      if (err) {
          console.log(err);
      } else {
          res.json("deleted");
      }
  });
});

async function register(req, res, next) {
  let user = await userCtrl.insert(req.body);
  user = user.toObject();
  delete user.hashedPassword;
  req.user = user;
  next()
}

function login(req, res) {
  let user = req.user;
  let token = authCtrl.generateToken(user);
  res.json({ user, token });
}
