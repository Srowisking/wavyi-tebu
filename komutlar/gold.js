const Discord = require('discord.js')
const db = require('quick.db')
var prefix = process.env.PREFIX;
 
exports.run = async(client, message, args) => {
    let kullanıcı = await db.fetch(`gold_${message.author.id}`);

  if( kullanıcı == undefined){
message.reply("Malesef bu komutu kullanamazsın çünkü bir `gold` üye değilsin! <a:srowyanl:733997295711944734>")
  }else{
      if( kullanıcı == "gold"){
 
        const golddddddmenü = new Discord.MessageEmbed()
 
             .setColor('ORANGE')
             .setAuthor(`Wavy | Gold Komutları Yardım Menüsü`)
             .addField(`<a:sagadogru:735869816103108689> Komutlar:`, `**Çok Yakında...**`) 
             .addField(`<a:sagadogru:735869816103108689> Linkler:`, `[▸ Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=725769560183144521&scope=bot&permissions=2146958847)
[▸ Destek Sunucumuz](https://discord.gg/HwNG8HR)`) 
             .setFooter(`© Wavy`)
        .setThumbnail(`https://media.giphy.com/media/H4PLBMsF8wOdkDXo2e/giphy.gif`)
            message.channel.send(golddddddmenü);
        
    }
      
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'gold', 
  description: "",
  usage: ''
};
    