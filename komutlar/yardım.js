const Discord = require('discord.js');
 
var prefix = process.env.PREFIX;
 
exports.run = async(client, message, args) => {
 
        const yardımmm = new Discord.MessageEmbed()
 
             .setColor('ORANGE')
             .setAuthor(`Wavy | Yardım Menüsü`)
             .addField(`
<a:sagadogru:735869816103108689> Kategoriler:`, `<a:xpremiumsimgex:744898834584436736> **w!kullanıcı →** Kullanıcı Kategorisini Gösterir.
<a:xpremiumsimgex:744898834584436736> **w!kullanıcı2 →** 2.Kullanıcı Kategorisini Gösterir.
<a:xpremiumsimgex:744898834584436736> **w!eğlence →** Eğlence Kategorisini Gösterir.
<a:xpremiumsimgex:744898834584436736> **w!yetkili →** Yetkili Kategorisini Gösterir.
<a:xpremiumsimgex:744898834584436736> **w!bot →** Bot Kategorisini Gösterir.
<a:xpremiumsimgex:744898834584436736> **w!gold →** Gold Kategorisini Gösterir.
<a:xpremiumsimgex:744898834584436736> **w!sahip →** Sahip Kategorisini Gösterir.`) // bunlar boş kalırsa hata verir
         .addField(`<a:sagadogru:735869816103108689> Linkler:`, `[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=725769560183144521&scope=bot&permissions=2146958847) | [Destek Sunucumuz](https://discord.gg/HwNG8HR)`) // bunlar boş kalırsa hata verir.
///.setImage(`https://media.giphy.com/media/H4PLBMsF8wOdkDXo2e/giphy.gif`)
          .setThumbnail(`https://media.giphy.com/media/H4PLBMsF8wOdkDXo2e/giphy.gif`)
  
             .setFooter(`© Wavy`)
            message.channel.send(yardımmm);
}
 
exports.conf = {
        enabled : true,
        guildOnly : false,
        aliases : ['help','h','y','komutlar'],
        permLevel : 0
}
//devtr
exports.help = {
        name : 'yardım',
        description : 'Komut kategorilerini atar',
        usage : 'e!yardım'
}
/////////////////////••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••