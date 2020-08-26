const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let user = message.mentions.members.first()

  if(!user) user = message.member
  
let x;
    let x2;
    let x3;
    let x4;
    let x5;
    let x6;
    let x7;
    let x8;
    let x9;
    let x10;
    let x11;
    
    
    if (user.hasPermission("ADMINISTRATOR")) x = "<a:srowdoru:733997295384789023>"
    if (!user.hasPermission("ADMINISTRATOR")) x = "<a:srowyanl:733997295711944734>"
    
 
    if (user.hasPermission("VIEW_AUDIT_LOG")) x2 = "<a:srowdoru:733997295384789023>"
    if (!user.hasPermission("VIEW_AUDIT_LOG")) x2 = "<a:srowyanl:733997295711944734>"
    
   
    if (user.hasPermission("MANAGE_GUILD")) x3 = "<a:srowdoru:733997295384789023>"
    if (!user.hasPermission("MANAGE_GUILD")) x3 = "<a:srowyanl:733997295711944734>"
    
   
    if (user.hasPermission("MANAGE_ROLES")) x4 = "<a:srowdoru:733997295384789023>"
    if (!user.hasPermission("MANAGE_ROLES")) x4 = "<a:srowyanl:733997295711944734>"
    
  
    if (user.hasPermission("MANAGE_CHANNELS")) x5 = "<a:srowdoru:733997295384789023>"
    if (!user.hasPermission("MANAGE_CHANNELS")) x5 = "<a:srowyanl:733997295711944734>"
    
  
    if (user.hasPermission("KICK_MEMBERS")) x6 = "<a:srowdoru:733997295384789023>"
    if (!user.hasPermission("KICK_MEMBERS")) x6 = "<a:srowyanl:733997295711944734>"
    
 
    if (user.hasPermission("BAN_MEMBERS")) x7 = "<a:srowdoru:733997295384789023>"
    if (!user.hasPermission("BAN_MEMBERS")) x7 = "<a:srowyanl:733997295711944734>"
    
   
    if (user.hasPermission("MANAGE_MESSAGES")) x8 = "<a:srowdoru:733997295384789023>"
    if (!user.hasPermission("MANAGE_MESSAGES")) x8 = "<a:srowyanl:733997295711944734>"
    
    
    if (user.hasPermission("MANAGE_NICKNAMES")) x9 = "<a:srowdoru:733997295384789023>"
    if (!user.hasPermission("MANAGE_NICKNAMES")) x9 = "<a:srowyanl:733997295711944734>"
    
    
    if (user.hasPermission("MANAGE_EMOJIS")) x10 = "<a:srowdoru:733997295384789023>"
    if (!user.hasPermission("MANAGE_EMOJIS")) x10 = "<a:srowyanl:733997295711944734>"
  
  if (user.hasPermission("MANAGE_WEBHOOKS")) x11 = "<a:srowdoru:733997295384789023>"
    if (!user.hasPermission("MANAGE_WEBHOOKS")) x11 = "<a:srowyanl:733997295711944734>"
      let embed = new Discord.MessageEmbed()

.setColor("ORANGE")
.setTitle(`${user.user.tag}'ın Yetkileri:`)
.setDescription(`${x} Yönetici\n${x2} Denetim Kaydını Görüntüle\n${x3} Sunucuyu Yönet\n${x4} Rolleri Yönet\n${x5} Kanalları Yönet\n${x6} Üyeleri At\n${x7} Üyeleri Yasakla\n${x8} Mesajları Yönet\n${x9} Kullanıcı Adlarını Yönet\n${x10} Emojileri Yönet\n${x11} Webhook'ları Yönet`)
.setFooter(`Wavy`)
    return message.channel.send(embed);
  
  
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['izinler'],
  permLevel: 0,
};

exports.help = {
  name: 'yetkilerim',
  description: 'Komutu kullandığınız sunucudaki yetkilerinizi/izinlerinizi gösterir.',
  usage: 'yetkilerim'
};