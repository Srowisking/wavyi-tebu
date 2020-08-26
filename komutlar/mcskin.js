const Discord = require(`discord.js`);

exports.run = (client, message, args) => {
 let kodyaz = args.slice(0).join(' ');
 let nee = 'https://mc-heads.net/body/' + kodyaz
 if (kodyaz.length < 1) return message.reply('Bir Oyuncu Adı Girmelisin! \Örn: xSrow');

 const TRTR = new Discord.MessageEmbed()
   .setColor('ORANGE')
   .setTitle('Oyuncu: ' + kodyaz)
   .setImage(nee)
   .setFooter(`© Wavy`)
 message.channel.send(TRTR);
 }


exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0,
};

exports.help = {
 name: 'mcskin',
};