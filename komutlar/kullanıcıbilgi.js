const Discord = require('discord.js');
const db = require('quick.db');
const moment = require("moment")
require("moment-duration-format")
const dateFormat = require("dateformat")
exports.run = async (client, message, args) => {
 
  var user = '';
        let member = message.mentions.users.first() || client.users.cache.get(args[0]);
        let author = message.author;
        if(member) {
             var user = member;
        } else {
             var user = author;
        }    
    member = message.guild.member(user);
 
      const Created = new Date().getTime() - user.createdAt.getTime();
    const brum = moment.duration(Created).format("Y [yıl], D [gün], H [saat], m [dakika], s [saniye]")
    const Joined = new Date().getTime() - member.joinedAt.getTime();
    const brummmmmm2 = moment.duration(Joined).format("Y [yıl], D [gün], H [saat], m [dakika], s [saniye]")
 
    let ozeldurum = user.presence.activities[0] || 'Özel Durumun Yok!'
        const Durum = user.presence.status;
        const Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
        const selam = (Durum == "online" ? ("Çevrimiçi") : (Durum == "offline" ? ("Çevrimdışı") : (Durum == "idle" ? ("Boşta") : (Durum == "dnd" ? ("Rahatsız Etmeyin") : ("Bilinmiyor/Bulunamadı.")))))
      const gullllllanıcı2 = new Discord.MessageEmbed()
      .setAuthor(user.tag, user.avatarURL) 
      .setColor("ORANGE")
      .addField("Şu Anda Oynadığı Oyun:", `${user.presence.game ? user.presence.game.name : 'Oynadığı Bir Oyun Yok!'}`)
      .addField("Özel Durum:", ozeldurum.state || "Özel Durum Yok!")
      .addField("Durum:", selam)
      .addField("Katılım Tarihi [Sunucu]:", brummmmmm2)
      .addField("Katılım Tarihi [Discord]:", brum )
      .addField("Kimlik:", ` ${user.id}`, false)
      .addField("Bot Mu?", `${user.bot ? '\n Evet.' : 'Hayır.'}`, false)    
      .addField("Sahip Olduğu Roller:", message.guild.member(user).roles.cache.filter(s => s.name !== '@everyone').map(m => m.name).join(', '))
      .addField("Son Gönderdiği Mesajı:", user.lastMessage || 'Yok')    
      .addField("Hesap Oluşturulma Tarihi:", moment(user.createdAt).format('DD/MM/YYYY'))
      .setFooter(`© Wavy | Kullanıcı-Bilgi Sistemi`, user.avatarURL())    
      message.channel.send(gullllllanıcı2)   
}
    
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kullanıcı-bilgi"],
  permLevel: 0
};
 
exports.help = {
  name: 'kullanıcıbilgi',
  description: '',
  usage: ''
};