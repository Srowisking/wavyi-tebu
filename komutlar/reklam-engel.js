const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client ,message, args) =>{
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(`Bu komutu kullanabilmek için \`MANAGE_MESSAGES\` yetkisine sahip olmalısın!`);
if(args[0] === 'aç') {
    db.set(`antoxd${message.guild.id}`, true)
    message.channel.send('Başarılı Bir Şekilde Reklam Engel Sistemi `Açıldı!` <a:srowdoru:733997295384789023>')
      db.set(`antoxd${message.guild.id}`, "acik")
  return
}
if (args[0] === 'kapat') {
  db.delete(`antoxd${message.guild.id}`)
message.channel.send('Başarılı Bir Şekilde Reklam Engel Sistemi `Kapatıldı!` <a:srowdoru:733997295384789023>')
      db.set(`antoxd${message.guild.id}}`, "kapali")
return
}
  message.channel.send(':no_entry_sign: Lüten `aç` ya da `kapat` yazın!')
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['reklamengel'],
 permLevel: 0
};

exports.help = {
 name: 'reklam-engel', 
 description: 'reklam-engel',
 usage: 'reklam-engel' 
};