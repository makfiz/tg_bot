import { Markup } from 'telegraf';

export function getMainMenu() {
  return Markup.keyboard([['Видео', 'img'], ['Новые картинки']]).resize();
}

export function yesNoKeyboard() {
  return Markup.inlineKeyboard(
    [Markup.button.callback('Да', 'yes'), Markup.button.callback('Нет', 'no')],
    { columns: 2 }
  );
}
