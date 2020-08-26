const Discord = require('discord.js');
const weather = require('weather-js');

exports.run = (client, message, args) => {
  weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
      if (err) message.channel.send(err);
      if (result === undefined || result.length === 0) {
          message.channel.send('Lütfen bir yer gir!');
          return;
      }
      var current = result[0].current;
      var location = result[0].location;
     console.log(`© Wavy`)
      const eru = new Discord.MessageEmbed()
          .setDescription(`**${current.skytext}**`)
          .setAuthor(`${current.observationpoint} için Hava Durumu`)
          .setFooter(`© Wavy`)
          .setThumbnail(current.imageUrl)
          .setColor("ORANGE")
          .addField('Zaman Dilimi:',`UTC${location.timezone}`, true)
          .addField('Derece Türü:',location.degreetype, true)
          .addField('Sıcaklık:',`${current.temperature} Derece`, true)
          .addField('Hava:', `${current.feelslike}`, true)
          .addField('Rüzgar:',current.winddisplay, true)
          .addField('Nem:', `${current.humidity}%`, true)
          message.channel.send(eru);
  })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hava-durumu"],
  permLevel: "0"
};

exports.help = {
  name: "havadurumu",
};