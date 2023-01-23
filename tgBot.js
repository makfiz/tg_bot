const { Telegraf, session, Scenes } = require('telegraf');

const { TOKEN } = require('./config');

const bot = new Telegraf(TOKEN);

const { getMainMenu, yesNoKeyboard } = require('./keyboards.js');

const userWizard = new Scenes.WizardScene(
  'user-wizard',
  ctx => {
    ctx.reply('What is your name?');

    //Necessary for store the input
    ctx.scene.session.user = {};

    //Store the telegram user id
    ctx.scene.session.user.userId = ctx.from.id;
    return ctx.wizard.next();
  },
  ctx => {
    //Validate the name
    if (ctx.message.text.length < 1 || ctx.message.text.length > 12) {
      return ctx.reply('Name entered has an invalid length!');
    }

    //Store the entered name
    ctx.scene.session.user.name = ctx.message.text;
    ctx.reply('What is your last name?');
    return ctx.wizard.next();
  },
  async ctx => {
    //Validate last name
    if (ctx.message.text.length > 30) {
      return ctx.reply('Last name has an invalid length');
    }

    ctx.scene.session.user.lastName = ctx.message.text;
    console.log(ctx.scene.session.user);
    //Store the user in a separate controller
    // userController.StoreUser(ctx.scene.session.user);
    return ctx.scene.leave(); //<- Leaving a scene will clear the session automatically
  }
);

const stage = new Scenes.Stage([userWizard]);

bot.use(session());
bot.use(stage.middleware());
bot.command('/sub', Scenes.Stage.enter('user-wizard'));

bot.start(ctx => {
  ctx.replyWithHTML(
    'Приветсвую в <b>DS Irbis Bot</b>\n\n' + 'Чем я могу вам помочь?',
    getMainMenu()
  );
});

bot.hears('Admin:4815162342', async ctx => {
  await ctx.reply(
    `${ctx.from.username} have been granted administrator privileges id:${ctx.from.id}`
  );
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
bot.command('submit', async ctx => {
  await ctx.reply('Введите ваше имя');
});

bot.catch;

module.exports = bot;
