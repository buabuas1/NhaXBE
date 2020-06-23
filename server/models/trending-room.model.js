const mongoose = require('mongoose');

const TrendingRoomSchema = new mongoose.Schema({
  RoomId : {
    type: String,
    required: true
  }
}, {
  versionKey: false
});

const collectionName = 'TrendingRoom'
module.exports = mongoose.model(collectionName, TrendingRoomSchema, collectionName);
