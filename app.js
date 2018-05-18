const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

function altgen() {
  var rand = ['http://shrinkearn.com/19it',
  'http://shrinkearn.com/YDi',
  'http://shrinkearn.com/N0yA',
  'http://shrinkearn.com/psA',
  'http://shrinkearn.com/GQKp',
  'http://shrinkearn.com/s4ZQ',
  'http://shrinkearn.com/DSE',
  'http://shrinkearn.com/XNv',
  'http://shrinkearn.com/jHWy',
  'http://shrinkearn.com/Yexo',
  'http://shrinkearn.com/PpFU',
  'http://shrinkearn.com/zq9',
  'http://shrinkearn.com/2MEI',
  'http://shrinkearn.com/pVdd',
  'http://shrinkearn.com/T3QQ',
  'http://shrinkearn.com/BDqZ',
  'http://shrinkearn.com/5G5t',
  'http://shrinkearn.com/rA5S',
  'http://shrinkearn.com/Zcs',
  'http://shrinkearn.com/dyY',
  'http://shrinkearn.com/dtG',
  'http://shrinkearn.com/SRAZ',
  'http://shrinkearn.com/zs2H',
  'http://shrinkearn.com/zs2H',
  'http://shrinkearn.com/6KLa',
  'http://shrinkearn.com/efaL',
  'http://shrinkearn.com/lQE',
  'http://shrinkearn.com/v6Tj',
  'http://shrinkearn.com/Dfvy',
  'http://shrinkearn.com/67Rk',
  'http://shrinkearn.com/at5M',
  'http://shrinkearn.com/JWgB'];

  return rand[Math.floor(Math.random()*rand.length)];
}

client.on("message", async message => {

  if(message.author.bot) return;

  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

if(command === "generate") {
  message.channel.send("**Generating alts...**");
    message.author.send(altgen());
	message.author.send("Bot made by skullymax");
  }
});

  client.login(config.token);
