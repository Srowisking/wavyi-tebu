const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  const xsrow = args.slice(0).join(' '); 
  if(!xsrow) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(`Bir **yazı** yazmalısın! <a:srowyanl:733997295711944734>`))
  
  const yazı = `https://dummyimage.com/2000x500/33363c/ffffff&text=${xsrow}`
  
  const embed = new Discord.MessageEmbed()
  .setImage(yazı)
  message.channel.send(embed)
}
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
name: 'banner-yaz',
description: 'resimliyazı frenzy',
usage: 'resimliyazı yazı'
}