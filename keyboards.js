const { Markup } = require('telegraf');

function getMainMenu() {
  return Markup.keyboard([
    ['Оставить заявку'],
    ['Часто задваемые вопросы'],
  ]).resize();
}

function yesNoKeyboard() {
  return Markup.inlineKeyboard(
    [Markup.button.callback('Да', 'yes'), Markup.button.callback('Нет', 'no')],
    { columns: 2 }
  );
}

module.exports = {
  getMainMenu,
  yesNoKeyboard,
};
