const mongoose = require("mongoose");

const MoodSchema = new mongoose.Schema({
  typeMood: {
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

module.exports = Mood = mongoose.model("moods", MoodSchema);
