const Discord = require('discord.js')
const db = require('quick.db')
var prefix = process.env.PREFIX;
 
exports.run = async(client, message, args) => {
    const golddurum2 = new Discord.MessageEmbed()
 
             .setColor('ORANGE')
             .addField(`<a:sagadogru:735869816103108689> Gold Durum:`, `
Gold Üyelik Aktif Değil! <a:srowyanl:733997295711944734>`) 
             .setFooter(`© Wavy`)

  
    let kullanıcı = await db.fetch(`gold_${message.author.id}`);

  if( kullanıcı == undefined){
message.channel.send(golddurum2)
  }else{
      if( kullanıcı == "gold"){
 
        const golddurum1 = new Discord.MessageEmbed()
 
             .setColor('ORANGE')
             .addField(`<a:sagadogru:735869816103108689> Gold Durum:`, `
Gold Üyelik Aktif! <a:srowdoru:733997295384789023>`)
             .setFooter(`© Wavy`)
            message.channel.send(golddurum1);
        
    }
      
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["golddurum"],
  permLevel: 0
};

exports.help = {
  name: 'gold-durum', 
  description: "",
  usage: ''
};
    