const Discord = require('discord.js');
 
var prefix = process.env.PREFIX;
 
exports.run = async(client, message, args) => {
 
        const bummm = new Discord.MessageEmbed()
 
             .setColor('ORANGE')
             .setAuthor(`Wavy | Yetkili Komutları Yardım Menüsü`)
             .addField(`<a:sagadogru:735869816103108689> Komutlar:`, `
**w!küfür-engel** | Küfür Engelini Açar/Kapatır.
**w!reklam-engel** | Reklam Engelini Açar/Kapatır.
**w!tag-taraması** | Tag Taraması Yapar.
**w!reklam-isim-ban** | Reklam İsim Ban Sistemini Açar/Kapatır.
**w!metin-kanalı-oluştur** | Metin Kanalı Oluşturur.
**w!sil** | Mesaj Siler.(1-100)
**w!ban** | Etiketlediğiniz Kişiyi Sunucudan Yasaklar.
**w!slowmode** | Slowmode(Yavaş Mod) Ayarlar.
**w!kanal-adı-değiştir** | Kanal Adını Değiştirir.
**w!kategorioluştur** | Kategori Oluşturur.
**w!sa-as** | SA-AS Ayarlar.
**w!otorol** | Otorol Ayarlar.`) 
             .addField(`<a:sagadogru:735869816103108689> Linkler:`, `[▸ Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=725769560183144521&scope=bot&permissions=2146958847)
[▸ Destek Sunucumuz](https://discord.gg/HwNG8HR)`) 
             .setFooter(`© Wavy`)
        .setThumbnail(`https://media.giphy.com/media/H4PLBMsF8wOdkDXo2e/giphy.gif`)
            message.channel.send(bummm);
}
 
exports.conf = {
        enabled : true,
        guildOnly : false,
        aliases : [],
        permLevel : 0
}

exports.help = {
        name : 'yetkili',
        description : 'Komut kategorilerini atar',
        usage : 'e!moderasyon'
}  