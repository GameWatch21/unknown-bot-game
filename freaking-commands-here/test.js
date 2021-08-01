const { MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  name: "bruh",
  description: "yeah bruh",
  execute(message , args){
   const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('primary')
					.setLabel('Dont press this button bruh')
					.setStyle('DANGER'),
			);
   message.channel.send({ content: "Your message has been set" , components: [row]});
    
  }
};