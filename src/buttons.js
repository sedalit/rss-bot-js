const { Telegraf, Markup } = require('telegraf');

module.exports.InlineKeyboard = {
    buttonsStart: () => {
        return Markup.inlineKeyboard([
            [Markup.button.callback('Список RSS', 'rssList')]
        ]);
    },
    buttonsSources: () => {
        return Markup.inlineKeyboard([
            [Markup.button.callback('Reddit', 'rssReddit')],
            [Markup.button.callback('Habr', 'rssHabr')],
            [Markup.button.callback('BBC Russian', 'rssBbc')]
        ]);
    },
    buttonBack: () => {
        return Markup.inlineKeyboard([
            [Markup.button.callback('Назад', 'rssList')]
        ]).reply_markup;
    }
};