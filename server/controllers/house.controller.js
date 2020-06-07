const bcrypt = require('bcrypt');
const Joi = require('joi');
const House = require('../models/house.model');

const houseSchema = Joi.object({
  DistrictId: Joi.string().required(),
  Name: Joi.string(),
  Adress: Joi.string(),
  RoomNumber: Joi.number()
})

module.exports = {
  insert,
  getList
}

async function insert(house) {
  house = await Joi.validate(house, houseSchema, { abortEarly: false });
  return await new House(house).save();
}

async function getList() {
  const houses = House.find();
  return await houses;
}

