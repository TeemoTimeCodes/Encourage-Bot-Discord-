const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!'

const token = 'ODg0ODMzNTI1Mzk0NzAyMzc3.YTePbw.9v0r_SnM9nq9NJVG0AFwq28f2fA'

Discord.Client.on('ready', ()=>{
    console.log('Time to get online')
    Discord.Client.user.setActivity('Encouragement to you!', {type: 'STREAMING'}).catch(console.error);
})

Discord.Client.login(token)