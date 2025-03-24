const { Telegraf } = require('telegraf');
const { CommandHandler } = require('./src/handlers/commandHandler');
const { CallbackHandler } = require('./src/handlers/callbackHandler');

const bot = new Telegraf(process.env.BOT_TOKEN);

CommandHandler(bot);
CallbackHandler(bot);

bot.launch();