const mongoose = require('mongoose');

const HouseSchema = new mongoose.Schema({
  DistrictId : {
    type: String,
    required: true
  },
  Name : {
    type: String,
    required: true
  },
  Adress : {
    type: String,
  },
  RoomNumber : {
    type: Number
  }
}, {
  versionKey: false
});

const collectionName = 'House'
module.exports = mongoose.model('House', HouseSchema, collectionName);
