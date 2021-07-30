const Discord = require("discord.js");
const db = require("quick.db");
const profiles = require("./../database/profile.js");

module.exports = {
  name: "profile",
  description: "No, this is not a profile command, dont trust anyone",
  aliases: ["pro"],
  execute(message, args){
    if(profiles.register === undefined){
      message.channel.send("Please Register with `u!register`");
    } else {
    const profile = new Discord.MessageEmbed()
     .setTitle(`${message.author.username}'s profile`)
    .addFields(
      {
        name: "Ukwon",
        value: `[EMOJI]${profiles.ukwon}`
      },
      {
        name: "Stamina",
        value: `[EMOJI]${profiles.stamina}`
      },
      {
        name: "Location",
        value: `[EMOJI]${profiles.location}`
      },
      {
        name: "Level",
        value: `[EMOJI]${profiles.level}`
      },
      {
        name: "EXP",
        value: `[EMOJI]${profiles.exp}`
      }
      )
    .setColor("BLUE")
    .setFooter("Created by Unknown Dev (GameWatch21)");
    message.channel.send(profile)
      }
    }
  }