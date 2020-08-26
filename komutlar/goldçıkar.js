const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (bot, message, args) => {
  
  if(message.author.id !== process.env.SAHIP) return message.reply(`Bu komutu sadece sahibim kullanabilir! <a:srowyanl:733997295711944734>`);
 
  let nesne = args[0]
  if (!nesne) return message.channel.send('Bir kullanıcı ID`si girmelisin! <a:srowyanl:733997295711944734>')
  
  db.delete(`gold_${nesne}`)
  
  message.channel.send(`<@${nesne}> isimli kullanıcı gold üyelikten çıkarıldı! <a:srowdoru:733997295384789023>`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'goldçıkar',
  description: '[Admin Komutu]',
  usage: 'karaliste <ID>'
};