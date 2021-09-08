module.exports = {
    name: 'encourage',
    description: "Random encouragement.",
    execute(message, args, client, Discord) {
        var number = [1, 2, 3];
        var randnumber = number[Math.floor(Math.random() * number.length)];
        if (randnumber == 1) {
            message.channel.send('I hope you have a nice day! 😊')
        } else if (randnumber == 2) {
            message.channel.send('You are bit too cool! 😉')
        } else if (randnumber == 3) {
            message.channel.send('Try your hardest today! 😄')

        }


    }
}