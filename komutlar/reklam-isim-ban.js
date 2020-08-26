const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send(':no_entry: Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın! <a:srowyanl:733997295711944734>')
    if (!args[0]) return message.channel.send('Bu sistemi kullanabilmek için: `w!reklam-isim-ban aç/kapat` <a:srowyanl:733997295711944734>')

    if (args[0] == 'aç') {
        db.set(`reklamisimban_${message.guild.id}`, 'acik')
        message.channel.send(`Reklam İsim Ban Sistemi Başarıyla Açıldı! <a:srowdoru:733997295384789023>`)

    }
    if (args[0] == 'kapat') {
        db.set(`reklamisimban_${message.guild.id}`, 'kapali')
        message.channel.send(`Reklam İsim Ban Sistemi Başarıyla Kapatıldı! <a:srowdoru:733997295384789023>`)

    }

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['reklam-isim-ban'],
    permLevel: 0
};

exports.help = {
    name: 'reklamisimban',
    description: 'Reklam isim ban sistemini açıp kapatır',
    usage: 'reklamisimban aç/kapat'
};