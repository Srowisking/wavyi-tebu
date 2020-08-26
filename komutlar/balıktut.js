const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, m) => {
  m.channel.send("Tuttuğun balığı çekiyorsun...").then(m => {
    var balıklar = [
      "Sazan Tuttun! :fish:",
      "Köpek Balığı Tuttun İyi Para Eder Sat Sat :D",
      "Uskumru Tuttun! :fish:",
      "Mezgit Tuttun! Havyarıda Var Hee! :wink: :fish:",
      "Japon Balığı Tuttun Yemeyi Düşünmüyorsun Herhalde?",
      "Hamsi Tuttun! :fish:",
      "Levrek Tuttun! :fish:",
      "Hiçbirşey Tutamadın Maalesef! :wastebasket:",
      "Alabalık Tuttun! :fish:",
      "Maalesef Balık Oltadan Kaçtı! :wastebasket:",
      "İstavrit Tuttun! :fish:",
      "Gümüş Balığı Tuttun! :wastebasket:",
      "Çukra Tuttun!:fish:",
      "Balon Balığı Tuttun, İğneye Dikkat!",
      "Yılan Balığı Tuttun! Allah, Çarpıldık!"
    ];
    var balık = balıklar[Math.floor(Math.random() * balıklar.length)];
    m.edit(`${balık}`);    
  });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['balık-tut', 'balıkıtut'],
  permLevel: 0
};
exports.help = {
  name: "balıktut"
};