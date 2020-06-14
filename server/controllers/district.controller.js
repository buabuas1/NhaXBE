const bcrypt = require('bcrypt');
const Joi = require('joi');
const District = require('../models/district.model');
const imgCtrl = require('./image.controller');

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
  let districts = await District.find();
  districts = JSON.parse(JSON.stringify(districts));
  const imgIds = districts.map((d) => {
    return d.ImageId;
  })
  let imgs = await imgCtrl.getList(imgIds);
  imgs = JSON.parse(JSON.stringify(imgs));
  districts = districts.map((d) => {
    const img = imgs.find(i => i._id === d.ImageId);
    if (!img) {
      return d;
    } else {
      return {...d, ImageUrl: img.Url}
    }

  })
  return districts;
}

