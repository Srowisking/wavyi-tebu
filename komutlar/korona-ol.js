const Discord = require ("discord.js");
exports.run = (client, message) => {
  
  
  var gorona = new Discord.MessageEmbed()
  
  .setColor("ORANGE")
  .setDescription("Artık sende korona oldun!")
  .setImage(`https://cdn.discordapp.com/attachments/677985078202073109/689935110551765023/a.gif`)
  .setFooter("© Wavy")
  
  message.channel.send(gorona)
  
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["koronaol"],
  permLevel: 0
};
module.exports.help = {
  name: 'korona-ol',
};