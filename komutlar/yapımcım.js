const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, m) => {
  const xsrow = new Discord.MessageEmbed()
  .setColor("ORANGE")
  .addField("<a:srowdeveloper:734004125401874463> Yapımcım <a:srowdeveloper:734004125401874463>", `<a:sagadogru:735869816103108689> <@488384549479251969>`, false)
      .setThumbnail(client.user.avatarURL);
  m.channel.send(xsrow);
};

exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
};

exports.help = {
  name: 'yapımcım'
};