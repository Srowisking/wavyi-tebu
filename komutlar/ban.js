const Discord = require('discord.js');
const fs = require('fs');
exports.run = (client, message, args) => {
  
    if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.channel.send(`Bu komutu kullanabilmek için \`Üyeleri Yasakla\` yetkisine sahip olmalısın! <a:srowyanl:733997295711944734>`);
  
     if(!message.guild.members.cache.get(client.user.id).hasPermission('BAN_MEMBERS')) return message.channel.send('Bu komutu uygulayabilmem için gerekli yetkiye sahip değilim! `Üyeleri Engelle`')
  
if (!message.guild) {
  const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('ORANGE')
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('Uyarı:', '`ban` adlı komutu özel mesajlarda kullanamazsın!')
  return message.author.send(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let coder = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.channel.send(`Sunucudan yasaklanacak kişiyi etiketlemelisin! <a:srowyanl:733997295711944734>`).catch(console.error);
  if (reason.length < 1) return message.channel.send(`Bir neden belirtmelisin! <a:srowyanl:733997295711944734>`)
  if (!message.guild.member(coder).bannable) return message.channel.send(`Yasaklanacak kişinin yetkisi benden daha üstün! <a:srowyanl:733997295711944734>`);
  message.guild.member(coder).ban();
  message.channel.send(" Başarılı! " + "<@" + coder + ">" + " isimli kullanıcı **" + reason + "** sebebiyle sunucudan yasaklandı! <a:srowdoru:733997295384789023>")
     
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ban'],
  permLevel: 0,
    
};

exports.help = {
  name: 'ban',
  description: 'İstediğiniz kişiyi sunucudan yasaklar.',
  usage: 'ban <@kullanıcı> <sebep>',
 
};
