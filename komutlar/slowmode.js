  const Discord = require('discord.js');
const request = require('request')
exports.run = async(client, message, args) => {
   if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(`Bu komutu kullanailmek için \`MANAGE_MESSAGES\` yetkisine sahip olmalısın!`);
if (message.channel.type !== "text") return;
const limit = args[0] ? args[0] : 0;
  if(!limit) {
              var embed = new Discord.MessageEmbed()
                .setDescription(`Doğru kullanım: \`w!slowmode [0/120]\` <a:srowyanl:733997295711944734>`)
                .setColor("ORANGE")
                .setTimestamp()
            message.channel.send({embed})
            return
          }
if (limit > 120) {
    return message.channel.send(new Discord.MessageEmbed().setDescription("Süre limiti maksimum **120** saniye olabilir! <a:srowyanl:733997295711944734>").setColor("ORANGE"));
}
   message.channel.send(new Discord.MessageEmbed().setDescription(`Yazma süre limiti başarıyla **${limit}** saniye olarak ayarlanmıştır! <a:srowdoru:733997295384789023>`).setColor("ORANGE"));
var request = require('request');
request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})};
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slow-mode","yavaş-mod", "slowmode", "yavas-mod", 'yavasmod', 'yavaşmod'],
  permLevel: 0,
};

exports.help = {
  name: 'slowmode',
  description: 'Sohbete yazma sınır (süre) ekler.',
  usage: 'yavaş-mod [1/120]',
};
