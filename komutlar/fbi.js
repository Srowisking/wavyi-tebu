const Discord = require ("discord.js");
exports.run = (client, message) => {
  
  
  var fbiopenthedoor = new Discord.MessageEmbed()
  
  .setColor("ORANGE")
  .setDescription("FBI Open The Door!")
  .setImage(`https://media.giphy.com/media/StWZJ9OppPY5WPpJY4/giphy.gif`)
  .setFooter("© Wavy")
  
  message.channel.send(fbiopenthedoor)
  
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["fbiçağır"],
  permLevel: 0
};
module.exports.help = {
  name: 'fbi',
};