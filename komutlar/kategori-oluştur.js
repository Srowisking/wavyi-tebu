const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin! `Kanalları yönet`')
  
  let kategorrrrrrri = args[0]
  if(!kategorrrrrrri) return message.channel.send(`Katagori oluşturmam için bir isim girmelisin! w!katagorioluştur <isim>`)
 
message.guild.channels.create(kategorrrrrrri, {type: 'category'})
 
  message.channel.send(`Başarıyla \`${kategorrrrrrri}\` adında bir katagori oluşturuldu! <a:srowdoru:733997295384789023>`)
 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kategorioluştur'],
  permLevel: 0
};
 
exports.help = {
  name: 'kategori-oluştur'
};