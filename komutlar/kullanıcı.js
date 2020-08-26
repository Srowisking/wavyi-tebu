const Discord = require('discord.js');
 
var prefix = process.env.PREFIX;
 
exports.run = async(client, message, args) => {
 
        const gullllllanıcı = new Discord.MessageEmbed()
 
             .setColor('ORANGE')
             .setAuthor(`Wavy | Kullanıcı Komutları Yardım Menüsü`)
             .addField(`<a:sagadogru:735869816103108689> Komutlar:`, `
**w!köpekadı** | Rastgele Köpek Adı Söyler.
**w!kediadı** | Rastgele Kedi Adı Söyler.
**w!atasözü** | Atasözü Atar.
**w!sunucu-pp** | Sunucunun PP'sini Atar.
**w!bansay** | Banlanan Kullanıcıları Sayar.
**w!pp** | PP'nizi Atar.
**w!banner-yaz** | Yazdığınız Yazıyı Banner Şeklinde Yazar.
**w!şifreoluştur** | Şifre Oluşturur.
**w!say** | Bot Sunucuyu Sayar. (Kaç Kişi Olduğu vb.)
**w!sunucubilgi** | Sunucunun Bilgilerini Gösterir.
**w!aktifsay** | Aktif Üyelerin Sayısını Gösterir.
**w!coolresim** | Cool Resim Atar.
**w!hesapla** | İşlem Hesaplar.
**w!kullanıcı-bilgi** | Bilgilerinizi Gösterir.
**w!rastgele-kullanıcı** | Bot Rastgele Kullanıcı Seçer.
**w!roller** | Bot Sunucuda Bulunan Rolleri Gösterir.
**w!mcskin** | Yazdığınız Minecraft Oyuncusunun Skinini Gösterir.
**w!havadurumu** | Yazdığınız Şehrin Hava Durumunu Gösterir.
**w!id** | Etiketlediğiniz Kişinin ID'sini Atar.
**w!korona** | Korona İstatistiklerini Atar.
**w!kanal-bilgi** | Kanal Bilgilerini Gösterir.`) // bunlar boş kalırsa hata verir
             .addField(`<a:sagadogru:735869816103108689> Linkler:`, `[▸ Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=725769560183144521&scope=bot&permissions=2146958847)
[▸ Destek Sunucumuz](https://discord.gg/HwNG8HR)`) // bunlar boş kalırsa hata verir
             .setFooter(`© Wavy`)
        .setThumbnail(`https://media.giphy.com/media/H4PLBMsF8wOdkDXo2e/giphy.gif`)
            message.channel.send(gullllllanıcı);
}
 
exports.conf = {
        enabled : true,
        guildOnly : false,
        aliases : [],
        permLevel : 0
}
//devtr
exports.help = {
        name : 'kullanıcı',
        description : 'Komut kategorilerini atar',
        usage : 'e!kullanıcı'
}