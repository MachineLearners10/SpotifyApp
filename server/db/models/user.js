const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  spotifyId: {
    type: String,
    unique: true,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  topSongs: {
    type: Array,
  },
  topArtists: {
    type: Array,
  },
});

module.exports = User = mongoose.model("users", UserSchema);
