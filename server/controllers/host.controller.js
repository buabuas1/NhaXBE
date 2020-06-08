const bcrypt = require('bcrypt');
const Joi = require('joi');
const Host = require('../models/host.model');

const hostSchema = Joi.object({
  Phone: Joi.string().required(),
  Name: Joi.string().required()
})

module.exports = {
  insert,
  getList
}

async function insert(host) {
  host = await Joi.validate(host, hostSchema, { abortEarly: false });
  return await new Host(host).save();
}

async function getList() {
  const arr = Host.find();
  return await arr;
}

