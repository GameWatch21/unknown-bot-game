const db = require("quick.db");
const profiles = require("./../database/profile.js");

module.exports = {
  name: "register",
  description: "As new citizen you need to register",
  aliases: ["reg"],
  execute(message, args){
    if(profiles.register === undefined){
      message.channel.send("Now you are registered as the Unknown Species, to know yourself, use `u!profile`")
    }
  }
}