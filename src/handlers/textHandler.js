const { InlineKeyboard } = require('../buttons');
const { CallbackHandler } = require('./callbackHandler');

module.exports.TextHandler = (bot) => {
    bot.on('text', async (ctx) => {
        let message = ctx.message.text;

        try {
            await CallbackHandler(bot).processRss(ctx, 'вашего источника', message);
        } catch (error) {
            console.log(error);
            await ctx.replyWithHTML(`К сожалению, у меня не получилось обратиться к этому источнику. Пожалуйста, проверьте корректность ссылки или попробуйте снова.`, InlineKeyboard.buttonsStart());
        }
        
    });
};