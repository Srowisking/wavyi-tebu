const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = async (bot, message, args) => {
let kişi = message.mentions.users.first() || message.author;
  
                                const idalmakomutembed = new Discord.MessageEmbed()
.setDescription(`İstediğiniz kişinin ID numarası: **${kişi.id}**`)
.setTimestamp()
.setFooter('Wavy')
.setColor("ORANGE")
  
 
    message.channel.send(idalmakomutembed);
  };
                                            
                                          
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["Id", "ıd", "ID"],
    permLevel: 0
  };

  exports.help = {
    name: "id",
  };