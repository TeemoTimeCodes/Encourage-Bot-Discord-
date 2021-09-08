module.exports = {
    name: 'encourage',
    description: 'a random encouragement for the user',
    execute(message, args){
        var numbers = ['1',"2","3","4"];
        var randnumbers = numbers[Math.floor(Math.random() * numbers.length)];
    if (randnumbers == 1 ){
    message.channel.send('I hope you have a nice day')
    } else if (randnumbers == 2){
    message.channel.send('You are a bit too cool')
    }
    }
}