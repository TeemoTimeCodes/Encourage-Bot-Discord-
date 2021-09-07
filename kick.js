module.exports = {
    name: 'kick',
    description: "This command kicks members!",
    execute(message, args){
        if(message.member.permissions.has("KICK_MEMBERS")){
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();
            message.channel.send(`${message.author.username} has kicked ${member} out of the server. What a noob.`);


        }
        }
    }
}