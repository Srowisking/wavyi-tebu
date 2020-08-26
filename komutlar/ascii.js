const Discord = require('discord.js')
const figlet = require('figlet')
exports.run = async(client, message, args) => {

let yazı = args.slice(0).join(' ')
if(!yazı) return message.reply('Bir yazı yazmalısın!')

  figlet(yazı, function (err, data) {
    if(err) {
      message.reply('Hata oluştu tekrar deneyin!')
      console.log(err)
    } else {
      const embed = new Discord.MessageEmbed()
      .setDescription('```'+data+'```')
      message.channel.send(embed)
    }
    //deniyelim şimdi
    
    
  }) 

};
exports.conf = {
enabled: false,//kapalı?
guildOnly: false, //sunucu özel?
aliases: [], //diğer adlar
permLevel: 0 //yetki
};

exports.help = {
name: 'ascii',//help komutu
description: '',//açıklaması
usage: ''//kullanımı
};