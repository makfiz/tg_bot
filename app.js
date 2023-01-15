import express from 'express';
import { PORT, TOKEN } from './config.js';
import { Telegraf } from 'telegraf';
import { getMainMenu, yesNoKeyboard } from './keyboards.js';
import { addTask, createDbConnection, createTable } from './db.js';

const app = express();
const bot = new Telegraf(TOKEN);

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
// bot.on('text', ctx => {
//   ctx.replyWithHTML(
//     `Вы действительно хотите добавить задачу:\n\n` +
//       `<i>${ctx.message.text}</i>`,
//     yesNoKeyboard()
//   );
// });

// bot.action(['yes', 'no'], ctx => {
//   if (ctx.callbackQuery.data === 'yes') {
//     addTask('сюда будем передавать текст задачи');
//     ctx.editMessageText('Ваша задача успешно добавлена');
//   } else {
//     ctx.deleteMessage();
//   }
// });

bot.launch();

app.get('/', (req, res) => {
  let db = createDbConnection();
  /* createTable(db) */
  res.send('1');
});

app.listen(PORT, () => console.log(`My server is running on port ${PORT}`));
