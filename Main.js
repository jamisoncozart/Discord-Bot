const Discord = require('discord.js');
const client = new Discord.Client();
const keys = require('./keys.js');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if(msg.content === 'you pass butter') {
    msg.reply('oh my god');
  }
});

client.login(keys.DiscordAPIKey);