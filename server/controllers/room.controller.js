const bcrypt = require('bcrypt');
const Joi = require('joi');
const Room = require('../models/room.model');

const roomSchema = Joi.object({
  Url: Joi.string().required()
})

module.exports = {
  insert,
  getList
}

async function insert(room) {
  room = await Joi.validate(room, roomSchema, { abortEarly: false });
  return await new Room(room).save();
}

async function getList() {
  const arr = Room.find();
  return await arr;
}

