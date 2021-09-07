module.exports = {
    name: 'member',
    description: "How many members?",
    execute(message, args){
        message.channel.send(`Total members: ${message.guild.memberCount}`);
    }
}