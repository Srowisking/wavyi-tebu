const Discord = require('discord.js');
const client = new Discord.Client();
var randomstring = require('randomstring');

exports.run = (client, message) => {
       var name =
            randomstring.generate({
            length: 12,
            charset: 'alphabetic'
})
       
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.MessageEmbed()
    .setColor("ORANGE")
    .setFooter('Wavy')
    .setTimestamp()
  
    .setDescription(message.author.username + ' şifren özelinden gönderildi! <a:srowdoru:733997295384789023>');
    message.channel.send(ozelmesajkontrol) }
    const pingozel = new Discord.MessageEmbed()
    .setColor("ORANGE")
    .setTimestamp()
    .setFooter('Wavy')
   
    .setDescription(message.author.username + ' şifren: ' + name);
    return message.author.send(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['randomşifre'],
  permLevel: 0
};

exports.help = {
  name: 'şifreoluştur',
  description: 'yoq',
  usage: 'yoq'
};