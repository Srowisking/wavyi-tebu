const Discord = require ("discord.js");
exports.run = (client, message) => {
  
  
  var kahkahaa = new Discord.MessageEmbed()
  
  .setColor("ORANGE")
  .setDescription(message.author.username + ' Kahkaha Attı! :joy:')
  .setImage(`https://media.giphy.com/media/lQ1nXVifuLqyVAH2Gu/giphy.gif`) 
  .setFooter("© Wavy")
  
  message.channel.send(kahkahaa)
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kahkahaat"],
  permLevel: 0
};
module.exports.help = {
  name: 'kahkaha',
};