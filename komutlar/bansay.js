const Discord = require('discord.js');
exports.run = (client, message, args) => {
  
   if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.channel.send(`Bu komutu kullanabilmek için \`Üyeleri Yasakla\` yetkisine sahip olmalısın!`);
  
      if(!message.guild.members.cache.get(client.user.id).hasPermission('BAN_MEMBERS')) return message.channel.send('Bu komutu uygulayabilmem için gerekli yetkiye sahip değilim! `Üyeleri Engelle`')
let guild = message.guild;
  
    guild.fetchBans()
  
        .then(bans => message.channel.send(`Sunucunuzda ${bans.size} banlanmış üye bulunmaktadır.`))
        .catch(console.error);
 
}

exports.conf = {
    enabled: true,
    runIn: ["bansay"],
    aliases: ['bansay'],
    permLevel: 0
  };

  exports.help = {
    name: "bansay",
    description: "Sunucudan banlanan kişilerin sayısını gösterir",
    usage: "w!bansay"
  }