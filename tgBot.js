const {Telegraf} = require('telegraf');
const TOKEN = "5890330997:AAFxzReJNm7IzLfTkxKDI89S-qqn-k5IqMw"
const bot = new Telegraf(TOKEN);

const { getMainMenu, yesNoKeyboard } = require('./keyboards.js');

bot.start(ctx => {
    ctx.replyWithHTML(
      'Приветсвую в <b>TaskManagerBot</b>\n\n' +
        'Чтобы быстро добавить задачу, просто напишите ее и отправьте боту',
      getMainMenu()
    );
  });
  
  bot.hears('Мои задачи', ctx => {
    ctx.reply('Тут будут ваши задачи');
  });

  bot.hears('Admin', async ctx => {
    await ctx.reply(`Zdarova Admin`);
    console.log(ctx.message.chat.id)
  });
  
  bot.hears('Добавить задачу', ctx => {
    ctx.reply('Тут вы сможете добавить свои задачи');
  });
  
  bot.hears('Смотивируй меня', ctx => {
    ctx.replyWithPhoto(
      'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg',
      {
        caption: 'Не вздумай сдаваться!',
      }
    );
  });
  
  bot.hears('Новые картинки', ctx => {
    ctx.replyWithPhoto({
      url: 'https://picsum.photos/200/300/?random',
      filename: 'kitten.jpg',
    });
  });
  
  bot.hears('Видео', ctx => {
    ctx.replyWithVideo({ source: '1.mp4' });
  });
  bot.command('oldschool', ctx => ctx.reply('Hello'));

  module.exports = bot