module.exports = {
    name: 'ping',
    description: "but not pong.",
    execute(message, args){
        message.channel.send('No.')  
    }
}