const bcrypt = require('bcrypt');
const Joi = require('joi');
const mongoose = require('mongoose');
const Room = require('../models/room.model');
const imgCtrl = require('./image.controller');

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

async function getList(body) {
  const {houseId} = body.query;
  let rooms = houseId ? await Room.find({HouseId: mongoose.Types.ObjectId(houseId)}) : await Room.find();
  rooms = JSON.parse(JSON.stringify(rooms));
  const imgIds = rooms.reduce((acc, cur) => [...acc, ...cur.Images, cur.AvatarId], []);
  let imgs = await imgCtrl.getList(imgIds);
  imgs = JSON.parse(JSON.stringify(imgs));
  rooms = rooms.map((d) => {
    const img = imgs.filter(i => d.Images && d.Images.indexOf(i._id) !== -1);
    const avatar = imgs.find(i => d.AvatarId === i._id);
    if (!img || img.length === 0) {
      return d;
    } else {
      return {...d, ImageUrls: img, AvatarUrl: avatar ? avatar.Url : img[0].Url}
    }

  })
  return rooms;
}

