const Discord = require('discord.js');
 
var prefix = process.env.PREFIX;
 
exports.run = async(client, message, args) => {
 
        const gullllllanıcı2 = new Discord.MessageEmbed()
 
             .setColor('ORANGE')
             .setAuthor(`Wavy | 2.Kullanıcı Komutları Yardım Menüsü`)
             .addField(`<a:sagadogru:735869816103108689> Komutlar:`, `
**w!yetkilerim** | Yetkilerinizi Gösterir.
**w!spoiler** | Yazdığınız Yazıyı Spoiler Şekline Yazar.
`) // bunlar boş kalırsa hata verir
             .addField(`<a:sagadogru:735869816103108689> Linkler:`, `[▸ Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=725769560183144521&scope=bot&permissions=2146958847)
[▸ Destek Sunucumuz](https://discord.gg/HwNG8HR)`) // bunlar boş kalırsa hata verir
             .setFooter(`© Wavy`)
        .setThumbnail(`https://media.giphy.com/media/H4PLBMsF8wOdkDXo2e/giphy.gif`)
            message.channel.send(gullllllanıcı2);
}
 
exports.conf = {
        enabled : true,
        guildOnly : false,
        aliases : [],
        permLevel : 0
}
//devtr
exports.help = {
        name : 'kullanıcı2',
        description : 'Komut kategorilerini atar',
        usage : 'e!kullanıcı'
}