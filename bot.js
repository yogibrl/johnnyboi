const Discord = require('discord.js');

const bot = new Discord.Client();

bot.login('NDc4MDA2NDQ2Mjc4MTgwODc2.DpZYDw.QhZ-9f8xj54yAclVxwe-OMIUJ7w');

bot.on('message', (message) => {
   if(message.author.id == 427623796456030208) return;
  
   if(message.content == "!verifyhelp") {
     message.reply('be sure to check out #welcome to learn how to verify!')
   };
   
   if(message.content == "!requestsoff") {
      if (message.member.roles.find('name','DiscordRequestsOn')) {
         var role = message.guild.roles.find('name','DiscordRequestsOn')
         user.removeRole(role)
      } else {
         message.reply('your requests are allready off!')
      };
   };
   if(message.content == "!requestson") {
      if (message.member.roles.find('name','DiscordRequestsOn')) {
         message.reply('you already have them on!')
      } else {
         var role = message.guild.roles.find('name','DiscordRequestsOn')
         message.author.addRole(role)
      };
   };
});
