var scraper = require('images-scraper');

const Google = new scraper({
    puppeteer: {
        headless: true
    }
})

module.exports = {
    name: 'image',
    description: 'An image scraper.',
    async execute(client, message, args) {
        const image_query = args.join(' ');
        if (!image_query) return message.channel.send('Please enter an image name.')

        const image_results = await Google.scrape(image_query, 1);
        message.channel.send(image_results[0].url);
    }

}