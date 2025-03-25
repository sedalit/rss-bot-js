const Parser = require('rss-parser');
const { InlineKeyboard } = require('../buttons');
const answers = require('../answers.json');

module.exports.CallbackHandler = (bot) => {
    this.processRss = async (ctx, sourceName, url, isCustomRss = false) => {
        let parser = new Parser();
        let feed = await parser.parseURL(url);

        let topicsToShow = feed.items.slice(0, process.env.TOPICS_PER_MESSAGE);

        let messageText = topicsToShow.map(item => {
            return `<b>${item.title}</b> - <a href="${item.link}">Подробнее</a>`;
        });
        messageText = messageText.join('\n');

        let readyMessage = `Новости с ${sourceName}:\n\n${messageText}`;
        let extra = {
            parse_mode: 'HTML',
            reply_markup: InlineKeyboard.buttonBack()
        };

        if (isCustomRss) {
            await ctx.replyWithHTML(readyMessage, extra)
        } else {
            await ctx.editMessageText(readyMessage, extra);
        }
    };
    bot.action('rssList', async (ctx) => {
        await ctx.editMessageText(answers.rssList, InlineKeyboard.buttonsSources());
    });
    bot.action('rssReddit', async (ctx) => {
        await this.processRss(ctx, 'Reddit', 'https://www.reddit.com/.rss');
    });
    bot.action('rssHabr', async (ctx) => {
        await this.processRss(ctx, 'Habr', 'https://habr.com/ru/rss/articles/');
    });
    bot.action('rssBbc', async (ctx) => {
        await this.processRss(ctx, 'BBC', 'https://feeds.bbci.co.uk/russian/rss.xml');
    });

    return this;
};