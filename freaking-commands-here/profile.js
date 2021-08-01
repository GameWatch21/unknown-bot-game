const Discord = require("discord.js");

module.exports = {
  name: "profile",
  description: "No, this is not a profile command, dont trust anyone",
  aliases: ["pro"],
  execute(message, args , db){
   
  // [ DATABASE SECTION ]
  const author = message.author.id
  const ukwon = db.get(`ukwon.${author}`);
  const stamina = db.get(`stamina.${author}`);
  const level = db.get(`level.${author}`);
  const location = db.get(`location.${author}`);
  const exp = db.get(`exp.${author}`);
  const register = db.get(`register.${author}`) || false;
  const location_emoji = db.get(`location_emoji.${author}`);
  // [ DATABASE SECTION END ]
  
    
    const profile = new Discord.MessageEmbed()
     .setTitle(`${message.author.username}'s profile`)
    .addFields(
      {
        name: "Ukwon",
        value: `[EMOJI]${ukwon}`
      },
      {
        name: "Stamina",
        value: `[EMOJI]${stamina}`
      },
      {
        name: "Location",
        value: location_emoji + `${location}`
      },
      {
        name: "Level",
        value: `[EMOJI]${level}`
      },
      {
        name: "EXP",
        value: `[EMOJI]${exp}`
      }
      )
    .setColor("BLUE")
    .setFooter("Created by Unknown Dev (GameWatch21)");
    if(register === false){
      message.channel.send("Register as one of the Unknown species at `u!register`");
     } else {
    message.channel.send({ embeds: [profile] })
      }
    }
  }