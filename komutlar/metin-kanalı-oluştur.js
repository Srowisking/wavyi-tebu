const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let kanal = args.slice(0).join(' ');
    let guild = message.guild;
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply('Bunun için gerekli iznin yok! **Kanalları Yönet**');
    if (kanal.length < 1) return message.reply('Oluşturacağım kanalın ismini yazmalısın! <a:srowyanl:733997295711944734>'); 
  message.delete();
  guild.channels.create(kanal, 'text');
  message.channel.send("Metin kanalı başarıyla oluşturuldu! <a:srowdoru:733997295384789023>");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['metin-kanal-aç'],
  permLevel: 0
}; 

exports.help = {
  name: 'metin-kanalı-oluştur',
  description: 'Bir yazı kanalı açar',
  usage: 'metin-kanal-aç'
};