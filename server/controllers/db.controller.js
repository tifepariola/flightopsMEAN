const bcrypt = require('bcrypt');
const Joi = require('joi');
const Db = require('../models/db.model');

const dbSchema = Joi.object({
  image_url: Joi.string().required(),
  registration: Joi.string().required(),
  mtow: Joi.number().allow('').optional(),
  max_fuel: Joi.number().allow('').optional(),
  max_pax: Joi.number().allow('').optional(),
  max_cargo: Joi.number().allow('').optional()
})


module.exports = {
  insert
}

async function insert(user) {
  user = await Joi.validate(user, dbSchema, { abortEarly: false, convert: true });
  return await new Db(user).save();
}
