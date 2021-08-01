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

client.on('interactionCreate', interaction => {
  if (!interaction.isButton()) return;
  
  if (!interaction.isCommand()) return;
  if (interaction.commandName === 'test') {
		interaction.reply('Testing go brrr, ngl this is a bad idea!');
	}
	
});

client.on('messageCreate', message => {
  if (!client.application?.owner) return client.application?.fetch();
  if (message.content.toLowerCase() === 'u!deploy' && message.author.id === client.application?.owner.id) {
		const data = [
			{
				name: 'bruh',
				description: 'Why do we need this',
			},
			{
				name: 'test',
				description: 'Testing go brrr',
			},
		];

		const slash_command = client.guilds.cache.get('647031060521025540')?.commands.set(data);
    message.channel.send("Yep, deployed" + "```\n" + data + "\n```");
		console.log(slash_command);
	}
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
