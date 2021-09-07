module.exports = {
    name: 'playlist',
    description: "Spotify",
    execute(message, args, client, Discord){
        message.channel.send('https://open.spotify.com/playlist/2tSRNLODcbs2Zgm3uJrkXs?si=f3bfe2b2b6de4390')  
    }
}