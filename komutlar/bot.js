const Discord = require('discord.js')
const db = require('quick.db')
var prefix = process.env.PREFIX;
 
exports.run = async(client, message, args) => {
  
        const embedyardımiştexsrow = new Discord.MessageEmbed()
 
             .setColor('ORANGE')
             .setAuthor(`Wavy | Bot Komutları Yardım Menüsü`)
             .addField(`<a:sagadogru:735869816103108689> Komutlar:`, `
**w!istatistik** | Botun İstatistiklerini Gösterir.
**w!ping** | Botun Gecikmesini Gösterir.
**w!gold-fiyatlar** | Gold Fiyatlarını Gösterir.
**w!gold-durum** | Gold Üye Olup Olmadığınızı Gösterir.
**w!davet** | Botun Davet Bağlantısını Gönderir.
**w!yapımcım** | Botun Yapımcısını Gösterir.
**w!canlıdestek** | Canlı Destek Alırsınız.`) // bunlar boş kalırsa hata verir
             .addField(`<a:sagadogru:735869816103108689> Linkler:`, `[▸ Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=725769560183144521&scope=bot&permissions=2146958847)
[▸ Destek Sunucumuz](https://discord.gg/HwNG8HR)`) // bunlar boş kalırsa hata verir
             .setFooter(`© Wavy`)
        .setThumbnail(`https://media.giphy.com/media/H4PLBMsF8wOdkDXo2e/giphy.gif`)
            message.channel.send(embedyardımiştexsrow);
        
    }
      
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bot', 
  description: "",
  usage: ''
};
    