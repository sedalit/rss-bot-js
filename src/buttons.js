const { Telegraf, Markup } = require('telegraf');

module.exports.InlineKeyboard = {
    buttonsStart: () => {
        return Markup.inlineKeyboard([
            [Markup.button.callback('Список RSS', 'rssList')]
        ]);
    },
    buttonsSources: () => {
        return Markup.inlineKeyboard([
            [Markup.button.callback('Reddit', 'rssReddit')]
        ]);
    },
    buttonBack: () => {
        return Markup.inlineKeyboard([
            [Markup.button.callback('Назад', 'back')]
        ]);
    }
};