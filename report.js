module.exports = {
    name: 'report',
    description: "this is a link to a report command!",
    execute(message, args){
        message.channel.send('Bot not working like usual? Report a bug here:')
        message.channel.send('https://forms.office.com/Pages/ResponsePage.aspx?id=5bZ8vYdq8k-hA9aFiR84kAWExcL6Mu5LsNXO3cGuho9UNkFYNk9ZSksyWlZSQlpBOEJDRkFSQlpKUC4u')
    }
}