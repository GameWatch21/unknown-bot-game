const mongoose = require("mongoose");
const profile = require("./../database/profile.js");

module.exports = {
  name: "bruh",
  description: "yeah bruh",
  execute(message , args){
   
    const messages = new profile({ message: args[0] });
    messages.save()
    message.channel.send("Your message has been set");
    message.channel.send(messages.message);
  }
};