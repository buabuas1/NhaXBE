const bcrypt = require('bcrypt');
const Joi = require('joi');
const Image = require('../models/image.model');

const imageSchema = Joi.object({
  Url: Joi.string().required()
})

module.exports = {
  insert,
  getList
}

async function insert(img) {
  img = await Joi.validate(img, imageSchema, { abortEarly: false });
  return await new Image(img).save();
}

async function getList() {
  const arr = Image.find();
  return await arr;
}

