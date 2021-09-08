const Discord = require('discord.js');

require(`dotenv`).config();

const client = new Discord.Client();

const ytdl = require("ytdL-core")

const prefix = 'fX'

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./Commands/').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
    const command = require(`./Commands/${file}`);

    client.commands.set(command.name, command);
}

const token = ''

var servers = {};

client.once('ready', () => {
    console.log('I am ready!')
    client.user.setActivity('16 commands [Prefix: fX] Bot Made and Updated by TeemoTime and Teddy_the_puppy.', {
        type: 'LISTENING'
    }).catch(console.error);
})

client.on('message', message => {
            if (!message.content.startsWith(prefix) || message.author.bot) return;

            const args = message.content.slice(prefix.length).split(/ +/)
            const command = args.shift().toLowerCase();



            if (command === 'report') {
                client.commands.get('report').execute(message, args);
            } else if (command == 'ping') {
                client.commands.get('ping').execute(message, args);
            } else if (command == 'member-count') {
                client.commands.get('member').execute(message, args);
            } else if (command == 'user-info') {
                client.commands.get('userinfo').execute(message, args);
            } else if (command == 'avatar') {
                client.commands.get('avatar').execute(message, args);
            } else if (command == 'prune') {
                client.commands.get('prune').execute(message, args);
            } else if (command == '') {
                return message.reply('you have not stated a command.\nTry fXhelp for a list of commands!')
            } else if (command == 'help') {
                message.channel.send('Enter one of these commands to get started:\nfXhelpmod\nfXhelpserver-info\nfXhelpreport')
            } else if (command == 'helpmod') {
                message.channel.send('fXprune - Prune messages (Mass Delete)\nfXprune {value between 2-100}')
            } else if (command == 'helpserver-info') {
                message.channel.send('fXmembercount - Find out how many members are in the server!\nfXuserinfo - display your username and ID\nfXavatar - Display your avatar!')
            } else if (command == 'rules') {
                client.commands.get('Rules').execute(message, args, Discord);
            } else if (command == 'kick') {
                client.commands.get('kick').execute(message, args);
            } else if (command == 'ban') {
                client.commands.get('ban').execute(message, args);
            } else if(command == 'image'){
                client.commands.get('image').execute(client, message, args);
            } else if(command == 'mute'){
                client.commands.get('mute').execute(message, args);
            } else if(command == 'unmute'){
                client.commands.get('unmute').execute(message, args);
            } else if(command == 'suggest'){
                client.commands.get('suggest').execute(message, args, client, Discord)
            } else if(command == 'ticket'){
                client.commands.get('ticket').execute(message, args, client, Discord)
            } else if(command == 'search'){
                client.commands.get('search').execute(message, args, client, Discord)
            } else if(command == 'playlist'){
                client.commands.get('playlist').execute(message, args, client, Discord)
            } else if(command == 'userinfo'){
                client.commands.get('userinfo').execute(message, args, client, Discord)
            } else if(command == 'encourage'){
                client.commands.get('encourage').execute(message, args, client, Discord)
            }


            });

        client.login(process.env.DISCORD_TOKEN);