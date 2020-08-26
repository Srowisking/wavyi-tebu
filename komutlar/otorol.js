const Discord = require('discord.js')//Modülümüzü tanımladık
const db = require('quick.db')//Database modülümüzü yükledik.
exports.run = async(client, message, args) => {//Komutu çalıştıracak olan yer
  
        const otorolmesajembed1 = new Discord.MessageEmbed()
.setDescription('Lütfen `ayarla` veya `sıfırla` yazın! <a:srowyanl:733997295711944734>')
.setTimestamp()
.setFooter('Wavy')
.setColor("ORANGE")
        
             const otorolmesajembed2 = new Discord.MessageEmbed()
.setDescription('Bir rol etiketlemelisin! <a:srowyanl:733997295711944734>')
.setTimestamp()
.setFooter('Wavy')
.setColor("ORANGE")
             
             let rol = message.mentions.roles.first()
             
                        const otorolmesajembed3 = new Discord.MessageEmbed()
.setDescription(`Otorol başarıyla ${rol} olarak ayarlandı! <a:srowdoru:733997295384789023>`)
.setTimestamp()
.setFooter('Wavy')
.setColor("RANDOM")
                        
                        const otorolmesajembed4 = new Discord.MessageEmbed()
.setDescription('Otorol başarıyla sıfırlandı! <a:srowdoru:733997295384789023>')
.setTimestamp()
.setFooter('Wavy')
.setColor("RANDOM")
        
        
 if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(`Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmalısın!`);
  
let komut = args[0]//Komut şeklinde yapacaz
 if(!komut) return message.channel.send(otorolmesajembed1) //deneyelim hadi
  
if(komut === 'ayarla') {

if(!rol) return message.channel.send(otorolmesajembed2)
db.set(`wavyotorol_${message.guild.id}`,rol.id)
message.channel.send(otorolmesajembed3)
return
}

if(komut === 'sıfırla') {
db.delete(`wavyotorol_${message.guild.id}`)
message.channel.send(otorolmesajembed4)
return
}  
  
};
exports.conf = {
enabled: false,//kapalı?
guildOnly: false, //sunucu özel?
aliases: [], //diğer adlar
permLevel: 0 //yetki
};

exports.help = {
name: 'otorol',//help komutu
description: '',//açıklaması
usage: ''//kullanımı
};