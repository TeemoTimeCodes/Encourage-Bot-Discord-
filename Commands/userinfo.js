module.exports = {
    name: 'userinfo',
    description: "Sends user's info!",
    execute(message, args, client, Discord){
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    }
}