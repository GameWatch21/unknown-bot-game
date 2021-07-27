const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
   Username: String,
   ID: { type: Number, require: true },
   RegisteredAt: String,
   Money: { type: Number, default: 0},
   Power: { type: Number, default: 10},
   Attack: { type: Number, default: 5},
   Defense: { type: Number, default: 0}
  });

const profileModel = mongoose.model('profile', profileSchema);