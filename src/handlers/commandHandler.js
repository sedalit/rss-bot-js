const { InlineKeyboard } = require('../buttons');

module.exports.CommandHandler = (bot) => {
    bot.start( async (ctx) => {
        await ctx.replyWithHTML('Приветствую! Я - бот для чтения RSS ленты. Пожалуйста, откройте список RSS по кнопке ниже.', InlineKeyboard.buttonsStart());
    });
};