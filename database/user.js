const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
   Username: String,
   ID: Number,
   RegisteredAt: String,
   Money: Number,
   Power: Number,
   Attack: Number,
   Defense: Number,
  });

const profileModel = mongoose.model('profile', profileSchema);