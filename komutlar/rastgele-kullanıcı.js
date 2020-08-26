const Discord = module.require('discord.js');
const client = new Discord.Client();

module.exports.run = async (bot, message, args) => {
    const rast = new Discord.MessageEmbed()
    .setColor('ORANGE')
    .setTitle('Rastgele kullanıcı:')
    .setDescription(message.guild.members.cache.random().displayName)
    .setFooter('© Wavy')
    .setTimestamp()
    message.channel.send(rast).then(rastt => {rastt.delete(7000)});
}

exports.conf = {
  enabled: true,
    guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rastgele-kullanıcı'
};