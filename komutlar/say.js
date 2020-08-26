const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice'); 
    let count = 0
     let botlar = message.guild.members.cache.filter(m => m.user.bot).size; 
    let textChannels = message.guild.channels.cache.filter(m => m.type == "text").size;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  let  sayşunu = message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status !== "offline").size 
    const mmmyeahh  = new Discord.MessageEmbed() 
        .setColor("ORANGE") 
        .setThumbnail(`https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRj3y3gQVMBqr21N70KRQV3wvRECl6rt2dYDk5plHg4rXe7L32X8_50oe96ySx1uE1vIpCjeowVZ0KRT7jK79A-Iw&usqp=CAU&ec=45690271`) 
        .addField(` **Sunucudaki Toplam Üye Sayısı**`,`**\`\`\`${message.guild.memberCount}\`\`\`**`)
        .addField(` **Toplam Çevrimiçi Üye Sayısı**`, `**\`\`\`${sayşunu}\`\`\`**`) 
        .addField(`**Seslideki Üye Sayısı**`,`**\`\`\`${count}\`\`\`**`) 
        .addField(`  **Yazı Kanalları**`, `<a:oksag:735858434536243330> **${textChannels}**`)
        .addField(`  **Ses Kanalları**`, `<a:oksag:735858434536243330> **${voiceChannels.size}**`) 
        .addField(` **Kullanıcılar**`, ` Çevrimiçi: **${message.guild.members.cache.filter(o => o.presence.status === 'online').size}** \n Rahatsız Etmeyin: **${message.guild.members.cache.filter(dnd => dnd.presence.status === 'dnd').size}** \n Boşta: **${message.guild.members.cache.filter(i => i.presence.status === 'idle').size}** \n Görünmez/Çevrimdışı: **${message.guild.members.cache.filter(off => off.presence.status === 'offline').size}** \n  Botlar : **${botlar}**`, true) 
        .setTitle(`Wavy | Say Sistemi`) 
        .setFooter(`© Wavy`, client.user.avatarURL()) 
    message.channel.send(mmmyeahh);


} 
                                                           



exports.conf = {
    enabled: true,                                                         
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
}; 



exports.help = {
    name: 'say', 
    description: 'Say', 
    usage: 'say'
} 