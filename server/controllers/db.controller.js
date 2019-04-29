const bcrypt = require('bcrypt');
const Joi = require('joi');
const Db = require('../models/db.model');

const dbSchema = Joi.object({
  name: Joi.string().allow('').optional(),
  country: Joi.string().allow('').optional(),
  icao: Joi.string().allow('').optional(),
  latitude: Joi.number().allow('').optional(),
  longitude: Joi.number().allow('').optional(),
  elevation: Joi.number().allow('').optional(),
  longest_runway: Joi.number().allow('').optional(),
  magnetic_variation: Joi.number().allow('').optional(),
  airport_type: Joi.string().allow('').optional(),
  beacon: Joi.string().allow('').optional(),
  fuel_types: Joi.string().allow('').optional(),
  landing_fee: Joi.boolean().allow('').optional(),
  oxygen: Joi.string().allow('').optional(),
  repairs: Joi.string().allow('').optional()

})


module.exports = {
  insert
}

async function insert(aircraft) {
  aircraft = await Joi.validate(aircraft, dbSchema, { abortEarly: false, convert: true });
  return await new Db(aircraft).save();
}
