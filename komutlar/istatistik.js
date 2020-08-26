const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");

exports.run = async (client, message, args) => {
  const msg = new Discord.MessageEmbed()
    .setColor("ORANGE")
  .setThumbnail(`https://media.giphy.com/media/H4PLBMsF8wOdkDXo2e/giphy.gif`)
    .setTitle(':bar_chart: Wavy | İstatistikler')
    .setFooter(client.user.tag, client.user.avatarURL())
    .addField("<a:sagadogru:735869816103108689> **Botun Sahibi**", "<@488384549479251969>")
    .addField(  
      "<a:sagadogru:735869816103108689> **Bellek Kullanımı**",
      (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB",
      true
    )
    .addField(
      "<a:sagadogru:735869816103108689> **Uptime Süresi**",
      moment
        .duration(client.uptime)
        .format("`" + " D [gün], H [saat], m [dakika], s [saniye]" + "`")
    )
  .addField("<a:sagadogru:735869816103108689> **Shard Sayısı**", "0/0")
    .addField(
      "<a:sagadogru:735869816103108689> **Kullanıcılar**",
      client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString(),
      true
    )
    .addField(
      "<a:sagadogru:735869816103108689> **Sunucular**",
      client.guilds.cache.size.toLocaleString(),
      true
    )
    .addField(
      "<a:sagadogru:735869816103108689> **Kanallar**",
      client.channels.cache.size.toLocaleString(),
      true
    )
    .addField("<a:sagadogru:735869816103108689> **Discord.JS Sürüm**", "v" + Discord.version, true)
    .addField("<a:sagadogru:735869816103108689> **Node.JS Sürüm**", `${process.version}`, true)
    .addField("<a:sagadogru:735869816103108689> **Ping**", client.ws.ping + " ms", true)
    .addField(
      "<a:sagadogru:735869816103108689> **CPU**",
      `\`\`\`md\n${os.cpus().map((i) => `${i.model}`)[0]}\`\`\``
    )
    .addField("<a:sagadogru:735869816103108689> **Bit**", `\`${os.arch()}\``, true)
    .addField("<a:sagadogru:735869816103108689> **İşletim Sistemi**", `\`\`${os.platform()}\`\``);
  return message.channel.send(msg);
};

exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: ['i'],
    permLevel: 0,
}

exports.help = {
  name: "istatistik",
};
