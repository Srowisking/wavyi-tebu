const Discord = require('discord.js');
exports.run = (client, message, args) => {
let stonks = args[0]
let stonks2 = args[1]
if (!stonks || !stonks2) return message.channel.send(`**2 Kelime Yazınız! \Örn: w!stonks armut elma 
Önemli Not: Türkçe Karakter Kullanmayınız!**`)
let stonks_attachment = `https://api.alexflipnote.dev/drake?top=${stonks}&bottom=${stonks2}`
message.channel.send(new Discord.MessageAttachment(stonks_attachment,"img.png"));
}
exports.conf = {
  enabled: false,  
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'stonks',
  description: '',
  usage: ''
};