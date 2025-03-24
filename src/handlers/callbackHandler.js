const Parser = require('rss-parser');
const { InlineKeyboard } = require('../buttons');

module.exports.CallbackHandler = (bot) => {
    bot.action('rssList', async (ctx) => {
        await ctx.editMessageText('Выберите источник:', InlineKeyboard.buttonsSources());
    });
    bot.action('rssReddit', async (ctx) => {
        let parser = new Parser();
        let url = 'https://www.reddit.com/.rss';
        let feed = await parser.parseURL(url);

        let messageText = feed.items.map(item => {
            return item.title + '\n\n';
        });

        await ctx.editMessageText('Новости с Reddit:\n\n' + messageText, InlineKeyboard.buttonBack());
    });
};