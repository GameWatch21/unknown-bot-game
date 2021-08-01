const { Client , Intents , Collection }= require('discord.js');
const gamewatchIntents = new Intents();
gamewatchIntents.add('GUILDS', 'GUILD_PRESENCES', 'GUILD_MEMBERS' , 'GUILD_MESSAGES', 'GUILD_EMOJIS_AND_STICKERS');
const client = new Client({
  intents: gamewatchIntents
   });
client.commands = new Collection();
const status = process.env.STATUS;

const prefix = process.env.PREFIX;

const token = process.env.TOKEN;
/*
const { prefix, status, token , mongodb_url } = require('./config.json');
*/
const fs = require('fs');

const commandFiles = fs
	.readdirSync('./freaking-commands-here')  
  .filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./freaking-commands-here/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Time for the unknown to be known');

	client.user.setActivity(status),
		{
			type: 'playing'
		};
});

client.on('messageCreate', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content
		.slice(prefix.length)
		.trim()
		.split(/ +/);
	const commandName = args.shift().toLowerCase();
  const db = require("quick.db");
  const command =
		client.commands.get(commandName) ||
		client.commands.find(
			cmd => cmd.aliases && cmd.aliases.includes(commandName)
		);

	if (!command) return;

	try {
		command.execute(message, args, db);
	} catch (error) {
		console.error(error);
		message.reply('There is something wrong when executing the command, maybe a unknown bug?');
	}
});

client.login(token);
