module.exports = {
    name: 'avatar',
    description: 'Shows discord avatar...',
    execute(message, args){
        if (!message.mentions.users.size) {
            return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({format: "png", dynamic: true})}>`)
        } 
    }
}