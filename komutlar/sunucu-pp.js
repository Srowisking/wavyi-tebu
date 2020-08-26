const xSroww = require('discord.js');
 
exports.run = function(client, message) {
 let spp2 = message.guild.name
    const spp = new xSroww.MessageEmbed()
        .setTitle(`${spp2} Sunucusunun Profil Fotoğrafı:`)
        .setImage(message.guild.iconURL())
    message.channel.send(spp);

};
 
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sunucupp"],
  permLevel: 0
};
 
exports.help = {
  name: 'sunucu-pp',
};