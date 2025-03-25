const { InlineKeyboard } = require('../buttons');
const { CallbackHandler } = require('./callbackHandler');
const answers = require('../answers.json');

module.exports.TextHandler = (bot) => {
    bot.on('text', async (ctx) => {
        let message = ctx.message.text;

        try {
            await CallbackHandler(bot).processRss(ctx, 'вашего источника', message);
        } catch (error) {
            console.log(error);
            await ctx.replyWithHTML(answers.default, InlineKeyboard.buttonsStart());
        }
        
    });
};