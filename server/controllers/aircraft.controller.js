const bcrypt = require('bcrypt');
const Joi = require('joi');
const Db = require('../models/aircraft.model');

const dbSchema = Joi.object({
  aircraft: Joi.number().required()
})


module.exports = {
  insert,
  fetch
}

async function insert(aircraft) {
  aircraft = await Joi.validate(aircraft, dbSchema, { abortEarly: false, convert: true });
  return await new Db(aircraft).save();
}
function fetch() {
  let aircrafts = '';
  Db.find({}, function (err, aircrafts) {
    if (err) {
      console.log(err);
    } else {
      return aircrafts;
    }
  })
}
