const Discord = require('discord.js');
 
var prefix = process.env.PREFIX;
 
exports.run = async(client, message, args) => {
  
        const yardımembedxsrow = new Discord.MessageEmbed()
 
             .setColor('ORANGE')
             .setAuthor(`Wavy | Eğlence Komutları Yardım Menüsü`)
             .addField(`<a:sagadogru:735869816103108689> Komutlar:`, `**w!kralol** | Kral Olursunuz.
**w!espri** | Bot Espri Yapar.
**w!ascii** | Yazdığınız Yazıyı Ascii Olarak Yazar.
**w!stonks** | Yazdığınız Yazıyı Stonks Meme'i Şeklinde Yapar.
**w!fbi** | FBI Çağırırsınız.
**w!kahkaha** | Kahkaha Atarsınız.
**w!aşkölçer** | Aşk Ölçersiniz. 
**w!şanslısayım** | Şanslı Sayınızı Öğrenirsiniz.
**w!balıktut** | Balık Tutarsınız.
**w!koronaol** | Korona Olursunuz.
**w!karıştır** | Kelime/Cümle Karıştırırsınız.`) 
             .addField(`<a:sagadogru:735869816103108689> Linkler:`, `[▸ Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=725769560183144521&scope=bot&permissions=2146958847)
[▸ Destek Sunucumuz](https://discord.gg/HwNG8HR)`) 
             .setFooter(`© Wavy`)
        .setThumbnail(`https://media.giphy.com/media/H4PLBMsF8wOdkDXo2e/giphy.gif`)
            message.channel.send(yardımembedxsrow);
}
 
exports.conf = {
        enabled : true,
        guildOnly : false,
        aliases : [],
        permLevel : 0
}

exports.help = {
        name : 'eğlence',
        description : 'Komut kategorilerini atar',
        usage : 'e!eğlence'
}