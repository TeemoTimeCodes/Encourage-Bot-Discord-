const { DiscordAPIError } = require("discord.js");

module.exports = {
    name: 'suggest',
    description: 'Creates a suggestion',
    execute(message, args, client, Discord){
        const channel = message.guild.channels.cache.find(c => c.name === 'suggestions');
        if(!channel) return message.channel.send('There is no suggestions channel!');

        let messageArgs = args.join(' ');
        const suggestEmbed = new Discord.MessageEmbed()
        .setColor('0099ff')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
        .setDescription(messageArgs);

        channel.send(suggestEmbed).then((msg) =>{
            msg.react('👍')
            msg.react('👎')
            message.delete();
        }).catch((err)=>{
            throw err;
        }) ;

    }
}