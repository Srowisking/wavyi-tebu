const Discord = require("discord.js");

exports.run = async (client, message, args, color, prefix) => {
    if(message.author.id !== process.env.SAHIP) return message.reply(`Bu komutu sadece sahibim kullanabilir! <a:srowyanl:733997295711944734>`);
  
        const evalhatamesaj = new Discord.MessageEmbed()
////.setTitle('Bir Gold Üye Belirdi! <a:wavygolduye:742353872013754428>')
.setDescription(`Bir kod girmelisin! <a:srowyanl:733997295711944734>`)
.setTimestamp()
.setFooter('Wavy')
.setColor("ORANGE")
        
    try {
        let evaliştela = args.join(" ");
        let evaliştela2 = eval(evaliştela);

      if (evaliştela.length < 1) return message.channel.send(evalhatamesaj)
      
        if (typeof whybolucode !== 'string')
            evaliştela2 = require('util').inspect(evaliştela2, { depth: 0 });
        let embed = new Discord.MessageEmbed()
        .setColor('ORANGE')
        .addField('» :inbox_tray: Giriş;', `\`\`\`js\n${evaliştela}\`\`\``)
        .addField('» :outbox_tray: Çıkış;', `\`\`\`js\n${evaliştela2}\n\`\`\``)
        message.channel.send(embed)
    } catch(e) {
      let embed2 = new Discord.MessageEmbed()
      .setColor('ORANGE')
      .addField('» :x: Hata;', "\`\`\`js\n"+e+"\n\`\`\`")
        message.channel.send(embed2);
    }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'eval',
    description: 'Kod denemeyi sağlar.',
    usage: 'w!eval'
  };