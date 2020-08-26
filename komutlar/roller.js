const Discord = require ("discord.js");
exports.run = (client, message) => {

  const eru = message.guild.roles.cache.filter(eruxsrow => eruxsrow.name !== '@everyone').map(eruxsrow => eruxsrow).join('  ') || 'Bu Sunucuda Rol Bulunmuyor.'
  const xsrow = new Discord.MessageEmbed()
  .setColor("ORANGE")
  .setDescription(eru)
  .setFooter("© Wavy")
  message.channel.send(xsrow)
  console.log(`Eru Iluvatar`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'roller',
};