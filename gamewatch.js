const discord = require("discord.js");
const client = new discord.Client();
const mongoose = require('mongoose');
const { prefix , status , token } = require('./config.json');
const fs = require("fs");

const commandFiles = fs
  .readdirSync("./commands")
  .filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./freaking-commands-here/${file}`);
  client.commands(command.name, command);
}

mongoose.connect(mongodb_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
  }).then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.log('Unable to connect to MongoDB Database.\nError: ' + err);
    });

client.once("ready", () => {
  console.log(
    "Time for the unknown to be known"
    );

  client.user.setActivity(status), {
    type: "playing"
    };

  }); 

client.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command =
    client.commands.get(commandName) ||
    client.commands.find(
      cmd => cmd.aliases && cmd.aliases.includes(commandName)
    );

  if (!command) return;

  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply("there was an error trying to execute that command!");
  }
});

client.login(token);