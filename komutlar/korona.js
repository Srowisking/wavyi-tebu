const Discord = require('discord.js');
const snekfetch = require('snekfetch');
exports.run = async (client, message, args) => {
  if(!args[0]) return message.reply(`**COVID-19 İstatistiklerini Görmek İçin:** __w!korona <ülke kodu>__ #EvdeKal`)

let a = args[0].toLowerCase()

  .replace('türkiye', 'TR')
  .replace('çin', 'CN')
  .replace('amerika', 'US')
  .replace('japonya', 'JP')
  .replace('fransa', 'FR')
  .replace('norveç', 'NE')
  .replace('isveç',  'SN')

 
    const text = await snekfetch.get(`https://thevirustracker.com/free-api?countryTotal=${a}`);
    const body = text.body;
  let region = body.countrydata[0].info.title
  var virus = [
      "",
  ]
  let ohaaaaaaaaaaaxsrowmuuuuuuuuuu = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('Wavy | COVID-19 Anlık İstatistik Tablosu')
    .setDescription(`Ülke: **${region}**`)
    .setThumbnail('https://www.diken.com.tr/wp-content/uploads/2020/01/corona_reuters-copy.jpg')
    .addField('*:microbe: Toplam Vaka:*',`\`\`〘 →${body.countrydata[0].total_cases}← 〙\`\` `)
    .addField('*:syringe: Toplam İyileşen:*',`\`\`〘 →${body.countrydata[0].total_recovered}← 〙\`\` `)
    .addField('*:dna: Toplam Enfekte:*',`\`\`〘 →${body.countrydata[0].total_active_cases}← 〙\`\` `)
    .addField('*:skull_crossbones: Toplam Ölümler:*',`\`\`〘 →${body.countrydata[0].total_deaths}← 〙\`\` `)
    .addField('*:test_tube: Bugünkü Vakalar:*',`\`\`〘 →${body.countrydata[0].total_new_cases_today}← 〙\`\` `, true)
    .addField('*:warning: Bugünkü Ölümler:*',`\`\`〘 →${body.countrydata[0].total_new_deaths_today}← 〙\`\` `, true)
    .addField('*:bangbang: Ciddi Vakalar:*',`\`\`〘 →${body.countrydata[0].total_serious_cases}← 〙\`\` `, true)
    .setTimestamp()
    .setFooter('© Wavy | COVID-19 İstatistikleri', client.user.avatarURL());
    message.channel.send(ohaaaaaaaaaaaxsrowmuuuuuuuuuu)
};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['corona', 'coronabilgi', 'corona-bilgi', 'korona', 'koronabilgi', 'korona-bilgi', 'virüs'],
  permLevel: 0 
};

exports.help = {
  name: 'korona',
  description: 'Corona virüs anlık gösterge tablosu.',
  usage: 'korona'
};