module.exports = {
    name: 'ban',
    description: "This command bans members!",
    execute(message, args){
        if(message.member.permissions.has("BAN_MEMBERS")){
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.ban();
            message.channel.send(`${message.author.username} has banned ${member} out of the server. What a noob.`);


        }
        }
    }
}