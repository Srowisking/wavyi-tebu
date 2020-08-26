const Discord = require('discord.js');
const client = new Discord.Client();
var catNames = require('cat-names');

exports.run = (client, message) => {
    name = catNames.random()
      const kediadı = new Discord.MessageEmbed()
    .setAuthor(name)
    .setColor(`ORANGE`)
    .setTimestamp()
      .setFooter("Wavy")
    message.channel.send(kediadı);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kediadıoluştur','kediadısöyle'],
  permLevel: 0
};

exports.help = {
  name: 'kediadı',
  description: 'kedi adı.',
  usage: 'kediadı'
};

