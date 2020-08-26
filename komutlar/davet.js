const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, m) => {
  const xsrowembed = new Discord.MessageEmbed()
  .setColor("ORANGE")
  .addField("<a:bildirim:735814886776635412> Wavy | Bağlantılar <a:bildirim:735814886776635412>", `<a:sagadogru:735869816103108689> [Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=725769560183144521&scope=bot&permissions=2146958847)
<a:sagadogru:735869816103108689> [Destek Sunucumuz](https://discord.gg/HwNG8HR)`, false)
      .setThumbnail(client.user.avatarURL);
  m.channel.send(xsrowembed);
};

exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
};

exports.help = {
  name: 'davet'
};