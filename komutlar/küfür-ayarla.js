const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client ,message, args) =>{
if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(`Bu komutu kullanabilmek için \`MANAGE_MESSAGES\` yetkisine sahip olmalısın!`);
if(args[0] === 'aç') {
    db.set(`xsrow.kufur_${message.guild.id}`, "xsrow")
    message.channel.send('Küfür Koruma Sistemi Başarılı Bir Şekilde `Açıldı!` <a:srowdoru:733997295384789023>')
  return
}
if (args[0] === 'kapat') {
  db.delete(`xsrow.kufur_${message.guild.id}`)
message.channel.send('Küfür Koruma Sistemi Başarılı Bir Şekilde `Kapatıldı!` <a:srowdoru:733997295384789023>')
return
}
  message.channel.send(':no_entry_sign: Lütfen `aç` ya da `kapat` Yazın!')
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['küfür'],
 permLevel: 0
};

exports.help = {
 name: 'küfür-engel',
 description: 'Davet Log Kanalını Belirler',
 usage: 'davet-kanal-ayarla #kanal'
};