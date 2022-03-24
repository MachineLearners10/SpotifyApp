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
  mood: {
    type: String,
    validate: {
      isIn: [["Energize me", "Calm me down"]],
    },
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

module.exports = User = mongoose.model("users", UserSchema);
