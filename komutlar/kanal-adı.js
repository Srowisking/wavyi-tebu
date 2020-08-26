const Discord = require('discord.js');

exports.run = async(client, message, args) => {
 
     if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin! `Kanalları yönet`')
     if(!message.guild.members.cache.get(client.user.id).hasPermission('MANAGE_CHANNELS')) return message.channel.send('Bu komutu uygulayabilmem için gerekli yetkiye sahip değilim! `Kanalları yönet`')
    
     let kanal = message.mentions.channels.first()
     let kanaladi = args.slice(1).join('  ')
     if(!kanal) {
     	return message.channel.send('Bir kanal etiketlemelisin! <a:srowyanl:733997295711944734> `w!kanal-adı-değiştir #kanal <kanal isimi>`')
     }
     if(!kanaladi) {
     	return message.channel.send('Kanal adını ne olarak değiştireceğini belirtmelisin! <a:srowyanl:733997295711944734>')
     } else {
   		 return message.channel.send(new Discord.MessageEmbed().setColor('ORANGE').setDescription(`<#${message.channel.id}> Adlı kanalın ismini **${kanaladi}** olarak değiştirmek istediğine emin misin? \n Eminsen :white_check_mark: Değilsen :x: 'e bas.`)).then(async m => {
   		 	await m.react('✅').then(r => {
   		 		let userr = message.author;
   		 		let onay = (reaction, userr) => reaction.emoji.name === '✅' && userr.id === message.author.id
   		 		let onay2 = m.createReactionCollector(onay)
   		 		onay2.on('collect', async (r) => {
   		 			m.reactions.removeAll()
   		 			kanal.setName(`${kanaladi}`)
   		 			m.edit(new Discord.MessageEmbed().setColor('ORANGE').setDescription(`Kanal adı başarıyla **${kanaladi}** olarak değiştirildi! <a:srowdoru:733997295384789023> `))
   		 		}) 
   		 	})
   		 	await m.react('❌').then(r => {
   		 let onay = (reaction, user) => reaction.emoji.name == '❌' && user.id == message.author.id;
         let onay2 = m.createReactionCollector(onay)
         onay2.on('collect', async(r) => {
              m.reactions.removeAll()
              m.edit(new Discord.MessageEmbed().setColor('ORANGE').setDescription('Kanal adı değiştirme işlemi iptal edildi!'))  
          })
       })
    })
   }
}

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["kanal-adı-değiştir"],
 permlevel: 0
}

exports.help = {
	name: "kanal-adı"
}