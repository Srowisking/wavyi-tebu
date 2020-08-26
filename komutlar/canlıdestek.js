const Discord = require('discord.js');
const client = new Discord.Client();
const { stripIndents } = require('common-tags');

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['hata', 'bug', 'bug-bildir','canlı-destek'],
    permLevel: 0,
      kategori: "bot",
  
  };
  
  exports.help = {
    name: 'canlıdestek',
    description: '',
    usage: 'canlıdestek',
   
  };

exports.run = async (client, message) => {
  
     const canlıdestekmesaj1 = new Discord.MessageEmbed()
.setDescription('Talep açma sebebinizi belirtiniz! <a:srowyanl:733997295711944734>')
.setTimestamp()
.setFooter('Wavy')
.setColor("ORANGE") 
       
        const canlıdestekmesaj2 = new Discord.MessageEmbed()
.setDescription('Destek talebi başarıyla gönderildi! Yetkililerin size ulaşmasını bekleyiniz! <a:srowdoru:733997295384789023>')
.setTimestamp()
.setFooter('Wavy')
.setColor("ORANGE") 
       
  let args = message.content.split(' ').slice(1);
  const hata = args.slice(0).join(' ');
  if (hata.length < 1) return message.channel.send(canlıdestekmesaj1)
    message.channel.send(canlıdestekmesaj2);
    var Hook = new Discord.WebhookClient("736199960906956860", "12uXxQN2CVbmFqCoX2H9nK1XoQHfHSPrvkm9vc6NPiu6oIJ1j_N2dQeJ1Qxhl_acxxQV")

   

    let embed = new Discord.MessageEmbed()
    .setColor("ORANGE")
    .setThumbnail(message.author.avatarURL())
    .setTitle(`> Canlı Destek Talebi!`)
    .setDescription(`**Talep Eden: **`+message.author.tag+`\n\n**Talep Sebebi: **\``+hata+`\``)
    .setFooter(`© Wavy | Canlı Destek Sistemi`)
    .setTimestamp()
    Hook.send(embed)

};