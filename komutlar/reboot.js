const Discord = require("discord.js");
const bot = new Discord.Client();

module.exports.run = async (bot, message, args) => {
       const rebootmesaj = new Discord.MessageEmbed()
.setDescription('<a:sagadogru:735869816103108689> Wavy yeniden başlatılıyor...')
.setTimestamp()
.setFooter('Wavy')
.setColor("ORANGE") 
       
  if(message.author.id !== process.env.SAHIP) return message.reply(`Bu komutu sadece sahibim kullanabilir! <a:srowyanl:733997295711944734>`);
  
message.channel.send(rebootmesaj).then(msg => {
///  message.channel.send(`**🔄 Bot Yeniden Başlatılıyor...**`).then(msg => {
  
    console.log(`Yeniden başlatma işlemi gerçekleştiriliyor!`);
    process.exit(0);
  });
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "reboot",
  description: "Botu Tekrar Başlatılır",
  usage: "reboot"
};

///// message.channel.send(rebootmesaj).then(msg => msg.delete({ timeout: 8000, reason: 'mesaj silme' }))