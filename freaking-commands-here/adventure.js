const Discord = require("discord.js");

module.exports = {
  name: "adventure",
  description: "adventuring go brr",
  execute(message, args){
    
    
    const adventure = new Discord.MessageEmbed()
    .setTitle("Adventure")
    .addFields(
      {
        name: "Username:" , 
        value: "nan"
      },
      {
        name: "Energy" ,
        value: "nan"
      },
      {
        name: "Gold Earned",
        value: "nan"
      },
      {
        name: "Unknown Killed",
        value: "nan"
      }
       )
    .setFooter("Requested by" + message.author.username)
    .setColor("GREEN");
    
    }
  }