const Discord = require('discord.js');
const karıştır = require('funny-words');
exports.run = (client, message, args) => {
let code = args.slice(0).join(" ");
if (!code) return message.channel.send('Bir Yazı Yazmalısın!')
message.channel.send(karıştır(code))
}
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'karıştır'
};
//Frenzy Code