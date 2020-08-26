const Discord = require('discord.js');
const client = new Discord.Client();
var dogNames = require('dog-names');

exports.run = (client, message) => {
    name = dogNames.allRandom()
      const köpekadı = new Discord.MessageEmbed()
    .setAuthor(name)
    .setColor(`ORANGE`)
    .setTimestamp()
      .setFooter("Wavy")
    message.channel.send(köpekadı);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["köpekadıoluştur","köpekadısöyle"],
  permLevel: 0
};

exports.help = {
  name: 'köpekadı',
  description: 'köpekği gösterir.',
  usage: 'köpekadı'
};
