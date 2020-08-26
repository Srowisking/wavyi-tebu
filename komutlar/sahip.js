const Discord = require('discord.js');
 
var prefix = process.env.PREFIX;
 
exports.run = async(client, message, args) => {
  
  if(message.author.id !== process.env.SAHIP) return message.reply(`Bu komutu sadece sahibim kullanabilir! <a:srowyanl:733997295711944734>`);
     
  const sahipembed = new Discord.MessageEmbed()
 
             .setColor('ORANGE')
             .setAuthor(`Wavy | Sahip Komutları Yardım Menüsü`)
             .addField(`<a:sagadogru:735869816103108689> Komutlar:`, `**w!goldyap** | ID'si Yazılan Üye Gold Üye Olur.
**w!goldçıkar** | ID'si Yazılan Üye Gold Üyelikten Çıkarılır.
**w!eval** | Yazdığınız Komutu Dener.
**w!reboot** | Botu Yeniden Başlatır.`) // bunlar boş kalırsa hata verir
             .addField(`<a:sagadogru:735869816103108689> Linkler:`, `[▸ Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=725769560183144521&scope=bot&permissions=2146958847)
[▸ Destek Sunucumuz](https://discord.gg/HwNG8HR)`) // bunlar boş kalırsa hata verir
             .setFooter(`© Wavy`)
        .setThumbnail(`https://media.giphy.com/media/H4PLBMsF8wOdkDXo2e/giphy.gif`)
            message.channel.send(sahipembed);
}
 
exports.conf = {
        enabled : true,
        guildOnly : false,
        aliases : [],
        permLevel : 0
}

exports.help = {
        name : 'sahip',
        description : 'Komut kategorilerini atar',
        usage : 'e!moderasyon'
}