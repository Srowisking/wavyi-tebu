const Discord = require('discord.js');
const db = require('quick.db');
const svo = require('svo-client');

exports.run = async (client, message, params) => {
    if (!message.guild) return message.author.send('Bu Komutu Sadece Sunucularda Kulanabilirsiniz!');
  const tah = await svo.tarih(message.guild.createdAt)
      const sunucubilgi = new Discord.MessageEmbed()
    .setColor("ORANGE")
    .setTimestamp()
    .setAuthor(message.guild.name, message.guild.iconURL())
    .addField('Ad:', message.guild.name)
    .addField('ID:', message.guild.id)
    .addField('Bölge:', message.guild.region)
    .addField('Üye Sayısı:', message.guild.memberCount)
    .addField('Sahibi:', message.guild.owner)
    .addField('Kanal Sayısı:', message.guild.channels.cache.size)
    .addField('Oluşturulma Tarihi:', tah)
    return message.channel.send(sunucubilgi);
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucu', 'sunucu bilgi', 'sbilgi'],
  permLevel: 0
};

exports.help = {
  name: 'sunucubilgi',
  description: 'Sunucu hakkında bilgi verir.',
  usage: 'e!sunucubilgi'
};