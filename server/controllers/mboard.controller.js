const bcrypt = require('bcrypt');
const Joi = require('joi');
const Db = require('../models/mboard.model');

const dbSchema = Joi.object({
    route_id: Joi.string().required(),
    message: Joi.string().allow('').optional(),
    usergroup: Joi.string().allow('').optional()
})


module.exports = {
    insert,
    fetch
}

async function insert(mboard) {
    mboard = await Joi.validate(mboard, dbSchema, { abortEarly: false, convert: true });
    return await new Db(mboard).save();
}
function fetch() {
    let mboards = '';
    Db.find({}, function (err, mboards) {
        if (err) {
            console.log(err);
        } else {
            return mboards;
        }
    })
}
