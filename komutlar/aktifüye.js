const Discord = require('discord.js');
exports.run = (client, message, args) => { 
 
  let trdev = message.guild.members.cache.filter(m => m.presence.status !== "offline").size
  
    const wavyaktif = new Discord.MessageEmbed()
    .setTitle("Sunucudaki Aktif Üyeler:")
    .setDescription('**' + message.guild.name + '** Sunucusunda şu anda toplam **' + trdev + '** aktif üye bulunuyor!')
    .setColor(Math.floor(Math.random()*16777215))
    message.channel.send(wavyaktif)  

  };
exports.conf = {
  enabled: true,  
  guildOnly: true, 
  aliases: ["aktifsay"],
  permLevel: 0
};

exports.help = {
  name: 'aktifüye',
  description: 'Sunucudaki Aktif Üyeleri Gösterir', 
  usage: 'aktifüye'
};  