const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
let Embed = new Discord.MessageEmbed()

           message.channel.send(`Pingim Hesaplanıyor...`).then(msg=>{
        const mmmm = new Discord.MessageEmbed()
        .setTitle('Ping Değerlerim:')
        .setDescription(`\nPing: ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms\nAPI Pingi: ${Math.round(client.ws.ping)}ms`)
        .setColor('ORANGE')
        msg.edit(mmmm);
        msg.edit("")
        
    })
                                                       }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
}

exports.help = {
    name: 'ping'
}