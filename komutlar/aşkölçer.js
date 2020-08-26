const Discord = require('discord.js');
exports.run = async (client, msg, args) => {
    let ölçeraşk=[
      "aşkölçer %1 gösteriyor.",
      "aşkölçer %2 gösteriyor.",
      "aşkölçer %3 gösteriyor.",
      "aşkölçer %4 gösteriyor.",
      "aşkölçer %5 gösteriyor.",
      "aşkölçer %6 gösteriyor.",
      "aşkölçer %7 gösteriyor.",
      "aşkölçer %8 gösteriyor.",
      "aşkölçer %9 gösteriyor.",
      "aşkölçer %10 gösteriyor.",
      "aşkölçer %11 gösteriyor.",
      "aşkölçer %12 gösteriyor.",
      "aşkölçer %14 gösteriyor.",
      "aşkölçer %15 gösteriyor.",
      "aşkölçer %16 gösteriyor.",
      "aşkölçer %18 gösteriyor.",
      "aşkölçer %19 gösteriyor.",
      "aşkölçer %20 gösteriyor.",
      "aşkölçer %29 gösteriyor.",
      "aşkölçer %31 gösteriyor. (Tehlike)",
      "aşkölçer %32 gösteriyor.",
      "aşkölçer %34 gösteriyor.",
      "aşkölçer %35 gösteriyor.",
      "aşkölçer %36 gösteriyor.",
      "aşkölçer %37 gösteriyor.",
      "aşkölçer %38 gösteriyor.",
      "aşkölçer %39 gösteriyor.",
      "aşkölçer %40 gösteriyor.",
      "aşkölçer %41 gösteriyor.",
      "aşkölçer %42 gösteriyor.",
      "aşkölçer %43 gösteriyor.",
      "aşkölçer %55 gösteriyor.",
      "aşkölçer %57 gösteriyor.",
      "aşkölçer %59 gösteriyor.",
      "aşkölçer %60 gösteriyor.",
      "aşkölçer %62 gösteriyor.",
      "aşkölçer %63 gösteriyor.",
      "aşkölçer %64 gösteriyor.",
      "aşkölçer %65 gösteriyor.",
      "aşkölçer %66 gösteriyor.",
      "aşkölçer %69 gösteriyor.",
      "aşkölçer %70 gösteriyor.",
      "aşkölçer %74 gösteriyor.",
      "aşkölçer %75 gösteriyor.",
      "aşkölçer %76 gösteriyor.",
      "aşkölçer %77 gösteriyor.",
      "aşkölçer %79 gösteriyor.",
      "aşkölçer %80 gösteriyor.",
      "aşkölçer %81 gösteriyor.",
      "aşkölçer %82 gösteriyor.",
      "aşkölçer %83 gösteriyor.",
      "aşkölçer %0 gösteriyor.",
      "aşkölçer %95 gösteriyor.",
      "aşkölçer %99 gösteriyor.",
      "aşkölçer %100 gösteriyor.",
    ]
let heybro= ölçeraşk[Math.floor(Math.random() * ölçeraşk.length)]
let xsrow = msg.mentions.members.first()
     if (!xsrow) return msg.channel.send('Kimi Sevdiğini Etiketle!') 
  msg.channel.send(`${msg.author}, ${xsrow} ile olan aşkını ${heybro}..`)
    }

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["aşk-ölçer"],
    permLevel: 0
   };

  exports.help = {
    name: 'aşkölçer',
    description: 'Aşk Ölçmeni sağlar.',
    usage: 'aşkölçer'
   }