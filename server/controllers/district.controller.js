const bcrypt = require('bcrypt');
const Joi = require('joi');
const District = require('../models/district.model');

const districtSchema = Joi.object({
  Name: Joi.string().required(),
  RoomNumber: Joi.number(),
  HouseNumber: Joi.number(),
})

module.exports = {
  insert,
  getList
}

async function insert(district) {
  district = await Joi.validate(district, districtSchema, { abortEarly: false });
  return await new District(district).save();
}

async function getList() {
  const districts = District.find();
  return await districts;
}

