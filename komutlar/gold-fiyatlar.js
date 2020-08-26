const Discord = require('discord.js')
const db = require('quick.db')
var prefix = process.env.PREFIX;
 
exports.run = async(client, message, args) => {
        const brumgoldfiyat = new Discord.MessageEmbed()
 
             .setColor('ORANGE')
             .setAuthor(`Wavy | Gold Üyelik Fiyatları`)
             .addField(`<a:sagadogru:735869816103108689> Fiyatlar:`, `Gold Üyelik Fiyatları İçin Bana Özelden Mesaj Atabilirsiniz! <@488384549479251969>`)
             .setFooter(`© Wavy`)
            message.channel.send(brumgoldfiyat);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'gold-fiyatlar', 
  description: "",
  usage: ''
};
    