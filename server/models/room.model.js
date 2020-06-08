const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  HouseId : {
    type: String,
    required: true
  },
  Name : {
    type: String,
    required: true
  },
  Square : {
    type: Number,
    required: true
  },
  Facilities: {
    type: Array
  },
  Images: {
    type: Array
  }
}, {
  versionKey: false
});

const collectionName = 'Room'
module.exports = mongoose.model(collectionName, RoomSchema, collectionName);
