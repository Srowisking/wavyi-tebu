const Discord = require('discord.js');
const math = require('math-expression-evaluator')
const stripIndents = require('common-tags').stripIndents

exports.run = function(client, message, args) {
    var ohaxsrowmu = args.join(' ');
    
    if(!ohaxsrowmu) return message.reply('Bir işlem belirtin! Doğru Kullanım: w!hesapla <işlem>')
    else { let xSrow;
        try {
            xSrow = math.eval(ohaxsrowmu)
        } catch(err) {
            message.channel.send('Hatalı işlem: **' + err)
        }

        const hesaplaxsrow = new Discord.MessageEmbed()
        .setColor("ORANGE")
        .addField('Soru:', ohaxsrowmu)
        .addField('Cevap:', xSrow)
        .setFooter('Wavy | Hesaplama Sistemi')

        message.channel.send(hesaplaxsrow)
    }

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ["hesaplama"],
  permLevel: 0 
};

exports.help = {
  name: 'hesapla', 
  description: 'Belirtilen işlemi yapar.',
  usage: 'hesapla <işlem>'
};