const Discord = require("discord.js");
const moment = require('moment');

module.exports.run = async (client, message, args) => {
  const ok = message.client.emojis.cache.get("");
           var kannnnalbilgi = new Discord.MessageEmbed()
                .setAuthor('#' + message.channel.name, message.guild.iconURL)
                .addField(" ID:", message.channel.id)
                if (message.channel.nsfw) {
                    kannnnalbilgi.addField(" Uygunsuz İçerik:", "Evet", true)
                }
                else {
                    kannnnalbilgi.addField(" Uygunsuz İçerik:", "Hayır", true)
                }
                kannnnalbilgi.addField('Oluşturulduğu Tarih:', moment(message.channel.createdAt).format('DD/MM/YYYY'), true)
                .setColor("ORANGE")
                .setThumbnail(message.guild.iconURL)
                .setFooter('© Wavy | Kanal Bilgi Sistemi', client.user.avatarURL)
            message.channel.send(kannnnalbilgi)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kanalbilgi'],
  permLevel: 0
};

exports.help = {
  name: 'kanal-bilgi',
  description: 'Kanal ile ilgili bilgi verir.',
  usage: 'kanal-bilgi'
}