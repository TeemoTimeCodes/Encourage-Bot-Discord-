module.exports = {
    name: 'prune',
    description: "Mass delete 2 to 100 messages.",
    execute(message, args){
        if(message.member.roles.cache.has('807211409233412107')){  
        const amount = parseInt(args[0]);

        if (isNaN(amount)) {
            return message.reply('that doesn\'t seem to be a valid number.')
        } else if (amount < 2 || amount > 100) {
            return message.reply('you need to input a number between 2 and 100.')
        } else if (amount > 2 || amount < 100) {
            message.channel.bulkDelete(amount);
            message.channel.send(`${message.author.username} successfully pruned ${amount} messages`)
        }
    } else {
        message.channel.send(`${message.author.username} you can\'t send this command as you don\'t have the right permissions.`)
    }
} 

}