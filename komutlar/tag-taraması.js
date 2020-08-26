const Discord = require('discord.js')

exports.run = (client, message, args) => {
  
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`);
  
  const tag = args.slice(0).join(' ');
if(!tag) return message.channel.send(`⚠️ Bir tag girmelisiniz! Örnek Kullanım; \n \`w!tag-taraması ♤\``)
  const memberss = message.guild.members.cache.filter(member => member.user.username.includes(tag));
    const embed = new Discord.MessageEmbed()
        .addField(`Kullanıcı adında ${tag} tagı olan kullanıcılar:`, memberss.map(member => `${member} = ${member.user.username}`).join("\n") || `Kimsenin kullanıcı adında \`${tag}\` tagı bulunmuyor.`)
        .setColor("ORANGE")
    message.channel.send(embed)
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['tag-tara', 'tagtara', 'tagtaraması', 'tagtaraması', 'tagtarama'],
    permLevel: 0
}

exports.help = {
    name: 'tag-taraması',
    description: 'Kullanıcıların kullanıcı adını tarar.',
    usage: 'tag-taraması <tag>'
}