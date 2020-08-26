const fs = require('fs'); ///////////////wavy botun modüllerini tanımlıyoruz!
const request = require('node-superfetch');
const Discord = require('discord.js');
const client = new Discord.Client();
const ms = require('parse-ms');
const http = require('http');
const express = require('express');
const db = require("quick.db");
const moment = require("moment");
const Jimp = require("jimp")
const chalk = require('chalk');
const app = express();

///////////////////////////////////////////////////////////

const log = message => {
  console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Wavy'ye bir komut yüklendi: ${props.help.name}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};


client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === process.env.SAHIP) permlvl = 4;
  return permlvl;
};



client.on("message",message=> {
  
    let client = message.client;
  let prefix = process.env.PREFIX
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {  
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }
  
})

////////////////////////eklendi-atıldı///////////////////7

client.on("guildCreate", async function(guild) {
const owner = client.users.cache.get(guild.ownerID)
const BotSahibi = process.env.SAHIP
const embed = new Discord.MessageEmbed()
.setTitle(`Yeni bir sunucuya eklendim! <a:srowdoru:733997295384789023>`)
.setColor("GREEN")

.addField(`Sunucu Adı:`, guild.name)
.addField(`Sunucu Sahibi:`, owner.username + "#" +owner.discriminator)
.addField(`Sunucu Üye Sayısı:`, guild.memberCount)

client.users.cache.get(BotSahibi).send({embed: embed}).catch(err => console.log("Bot sahibine mesaj atamıyorum!"))
})


client.on("guildDelete", async function(guild) {
const owner = client.users.cache.get(guild.ownerID)
const BotSahibi = process.env.SAHIP
const embed = new Discord.MessageEmbed()
.setTitle(`Bir sunucudan atıldım! <a:srowyanl:733997295711944734>`)
.setColor("RED")
.addField(`Sunucu Adı:`, guild.name)
.addField(`Sunucu Sahibi:`, owner.username + "#" + owner.discriminator)
.addField(`Sunucu Üye Sayısı:`, guild.memberCount)

client.users.cache.get(BotSahibi).send({embed: embed}).catch(err => console.log("Bot sahibine mesaj atamıyorum!"))
})


////////////////////////////////////küfür*engel
 
client.on("message", async msg => {
   const küfürengelembed = new Discord.MessageEmbed()
.setDescription(`Hey! ${msg.author} Bu sunucudaki küfürler **Wavy** tarafından engellenmektedir! \n Küfür etmene izin vermeyeceğim.`)
.setTimestamp()
.setFooter('Wavy')
.setColor("ORANGE")
 const korumakufur = await db.fetch(`xsrow.kufur_${msg.guild.id}`)
    if (korumakufur == "xsrow") {
        const kufur = ["oç", "amk", "ananı sikiyim", "am", "amcık", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq", "siktir", "siktir git", "sg", "siktirgit", "am kurusu"];
        if (kufur.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                          
                      return msg.channel.send(küfürengelembed)
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    if (!korumakufur) return;
});

/////client.on('message', async msg => {
  /////if (msg.content.toLowerCase() === 'sa' || msg.content.toLowerCase() == 'selam' || msg.content.toLowerCase() == 'selamun aleyküm' || msg.content.toLowerCase() == 'sea' || msg.content.toLowerCase() == 'sae' || msg.content.toLowerCase() == 'selamün aleyküm' || msg.content.toLowerCase() == 'saa' || msg.content.toLowerCase() == 'seaa') {
    ////await msg.react('🇦');
    ////await msg.react('🇸');
////}});

////////////////////////////ready

//client.on('ready', () => {
//console.log(`Wavy#1617 Olarak Giriş Yapıldı!`);
//console.log("Yayın Durumu Aktif!")
////////////////////////////////////////////////////////////////77🔥w!yardım | w!canlıdestek🔥
//client.user.setActivity(`w!yardım | w!davet`)
  ///client.user.setStatus(`dnd`)
 // type: "STREAMING",
  //url: "https://www.twitch.tv/elentybot"})
    //.then(presence => console.log(`Oynuyor Yazısı Ayarlandı!`))
    //.catch(console.error);
//});


   const etiketmesajgo = new Discord.MessageEmbed()
////.setTitle('Bir Gold Üye Belirdi! <a:wavygolduye:742353872013754428>')
.setDescription(`Prefixim: **w!** \n Yardım için: **w!yardım**`)
.setTimestamp()
.setFooter('Wavy')
.setColor("ORANGE")

client.on("message", msg => {
  if (msg.content.includes(`<@${client.user.id}>`) || msg.content.includes(`<@!${client.user.id}>`)) {
    msg.channel.send(etiketmesajgo);
  }
});

/////////////////////otorol

client.on("guildMemberAdd", async member => {
let rol = await db.fetch(`wavyotorol_${member.guild.id}`)
  member.roles.add(rol)
})

////gold
      const wavygoldmesaj = new Discord.MessageEmbed()
////.setTitle('Bir Gold Üye Belirdi! <a:wavygolduye:742353872013754428>')
.setDescription('Bir Gold Üye Belirdi! <a:wavygolduye:742353872013754428>')
.setTimestamp()
.setFooter('Wavy')
.setColor("ORANGE")


client.on("message", async msg => {
let timeout = 600000
let dakdest = await db.fetch(`goldzzz_${msg.author.id}`);
let i = db.fetch(`gold_${msg.author.id}`)
          if (i == 'gold') {
    if (dakdest !== null && timeout - (Date.now() - dakdest) > 0) {
        let time = ms(timeout - (Date.now() - dakdest));
    } else {
  if(msg.author.bot) return;   
  if (msg.content.length > 1) {
db.set(`goldzzz_${msg.author.id}`, Date.now());
   msg.channel.send(wavygoldmesaj).then(msg => msg.delete({ timeout: 8000, reason: 'mesaj silme' }))
  }
};
          }
   else if (i == undefined) {           
          }
          if (!i) return;
        
});

///////////sa-as
   const saasembed = new Discord.MessageEmbed()
////.setTitle('Bir Gold Üye Belirdi! <a:wavygolduye:742353872013754428>')
.setDescription('Aleyküm Selam Hoş Geldin. <a:krallbe:741363391553208442>')
.setTimestamp()
.setFooter('Wavy')
.setColor("ORANGE")
   
 client.on("message", async msg => {
  let saas = await db.fetch(`saas_${msg.guild.id}`);
  if (saas == 'kapali') return;
  if (saas == 'acik') {
  if (msg.content.toLowerCase() === 'sa' || msg.content.toLowerCase() == 'selam' || msg.content.toLowerCase() == 'selamun aleyküm' || msg.content.toLowerCase() == 'sea' || msg.content.toLowerCase() == 'sae' || msg.content.toLowerCase() == 'selamün aleyküm' || msg.content.toLowerCase() == 'saa' || msg.content.toLowerCase() == 'seaa') {
    msg.channel.send(saasembed);
  }
  }
});

////reklam-engel

client.on("message", async msg => {
   const reklamengelembed = new Discord.MessageEmbed()
.setDescription(`Hey! ${msg.author} Bu sunucudaki reklamlar **Wavy** tarafından engellenmektedir! \n Reklam yapmana izin vermeyeceğim.`)
.setTimestamp()
.setFooter('Wavy')
.setColor("ORANGE")
  let antoxd = await db.fetch(`antoxd${msg.guild.id}`)
 if (antoxd === "acik") {
        const reklam = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg"];
        if (reklam.some(word => msg.content.includes(word))) {
      
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                          
                      return msg.channel.send(reklamengelembed)
      }
    }
}
  
})


//////////////////////////////////////
      const sadeceprefixiyazıncamesaj = new Discord.MessageEmbed()
////.setTitle('Bir Gold Üye Belirdi! <a:wavygolduye:742353872013754428>')
.setDescription(`Merhaba!\nYardım almak için: **w!yardım**`)
.setTimestamp()
.setFooter('Wavy')
.setColor("ORANGE")

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'w!') {
    msg.channel.send(sadeceprefixiyazıncamesaj);
  }
});

////////////yazıyor

///client.on('ready', ()=>{
///client.channels.cache.get('733384245791424580').startTyping()
///})

/////eklenince-sunucu-sahibine-mesaj

client.on('guildCreate', async guild => {

const wavygirişmesajıdırbu = new Discord.MessageEmbed()

.setColor("ORANGE")
.addField(`Merhaba ${guild.name}`, "Adlı Sunucuya Giriş Yaptım!")
.addField("Prefixim:", "w!")
.addField("Komutlarımı görmek için:", "w!yardım")
.setFooter("Wavy") 
.setTimestamp()
.setThumbnail("https://media.giphy.com/media/H4PLBMsF8wOdkDXo2e/giphy.gif")
guild.owner.send(wavygirişmesajıdırbu); 

});

/////////////Reklam - İsim - Ban\\\\\\\\\\\\\\\\\\

client.on('guildMemberAdd', async member => {
  const reklamisim = ["discord.gg/", ".net", "https://discord.gg", "invite", "join", "twitch", "instagram", "facebook", "dlive", "nolive", "discordbots.org", "discordapp", ".com", ".org", ".me", ".gg", ".io", "www.", "http", "https", ".rf.gd", ".az", ".party",".xyz"]; 
  let reklamisimban = await db.fetch(`reklamisimban_${member.guild.id}`) 
  if (reklamisimban === 'kapali') return; 
  if (reklamisimban === 'acik') { 
   if (reklamisim.some(word => member.user.username.includes(word)) ) { 
      member.ban({ 
          reason: `İsminde reklam olduğundan dolayı Wavy tarafından yasaklandı.`, 
        }) 
    } 
  } 
});

////////////////// bot eklenince oto kanala mesaj \\\\\\\\\\\\\\\\\\\\\\\\

const emmmmbed = new Discord.MessageEmbed()
.setColor("ORANGE")
.setThumbnail(`https://media.giphy.com/media/H4PLBMsF8wOdkDXo2e/giphy.gif`)
.addField(`Wavy - Teşekkürler`, `Selamlar ben <@488384549479251969>, botumu eklediğiniz için çok teşekkürler!`)
.addField(`Wavy - Prefix(Ön Ek)`, `Wavy botun prefixi(ön eki) = \`w!\`'dir.`)
.addField(`Wavy - Nasıl Kullanılır?`, `Wavy botun nasıl kullanıldığını öğrenmek için \`w!yardım\` yazmanız yeterlidir.`)
.addField(`Wavy - Linkler`, `Destek Sunucumuz:\nhttps://discord.gg/EtJ4FGH`)
.setFooter(`Wavy`)
.setTimestamp()
///.setImage(`https://i.pinimg.com/originals/a7/2e/dd/a72eddb090f20f7f8dd535c8390c2fba.gif`);

client.on("guildCreate", guild => {

let defaultChannel = "";
guild.channels.cache.forEach((channel) => {
if(channel.type == "text" && defaultChannel == "") {
if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
defaultChannel = channel;
}
}
})

defaultChannel.send(emmmmbed)

});

///////////////////////////////// client.login ////////////////////////////////////

client.on("ready", ready => { 
///////////////////////////✨ w!yardım | w!davet ✨
 client.user.setActivity("Wavy VDS Geçti!")
  //////////////////////////
});
client.login(process.env.TOKEN)
.then(function() {
console.log('Token doğru. Bot aktif ediliyor.')
}, function(err) {
console.log("Tokeniniz yanlış. Bot başlatılamıyor.")
setInterval(function() {
process.exit(0)
}, 20000);
})
