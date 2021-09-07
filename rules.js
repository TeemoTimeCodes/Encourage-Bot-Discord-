module.exports = {
    name: 'Rules',
    description: "An embed to show rules.",
    execute(message, args, Discord){
        const RulesEmbed = new Discord.MessageEmbed()
        .setColor('0099ff')
        .setTitle('Discord server rules')
        .setDescription('Make sure to follow these rules to avoid unwanted consequence!')
        .addFields(
            {name: 'Rule 1:', value: 'Be Respectful!'},
            {name: 'Rule 2', value: 'No NSFW, keep the server clean!'},
            {name: 'Rule 3', value: 'No spam.'},
            {name: 'Rule 4', value: 'Do not expose personal information.'},
            {name: 'Rule 5', value: 'Advertisemments go in #selfpromo.'},
            {name:'Rule 6', value: 'No selling any goods of any kind on our server.'},
            {name: 'Further notice', value: 'The appropriate people do have the right to kick, ban or mute members that are not following these rules!\nMake sure to read the rules in full on #rules!'} 
        )
        message.channel.send(RulesEmbed);
    }
}