const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message' , message => {
if (message.author.bot) return;
           if (message.content == '.')
           if (message.author.id === '351366504068939777'){
if (!message.channel.guild) return;
message.author.send(login)
}  
});

var prefix = "!"
client.on('message', message => {
    if (message.content.startsWith(prefix + "avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});



client.login ("NTI4NTg1Nzg4MjAwMzIxMDM1.DwkcQA.DJGAQzN-FRMI6Cj0Tojaelvpg7w")
