import { Context } from 'telegraf';
import createDebug from 'debug';

const debug = createDebug('bot:readAllFarts_command');

const readAllFarts = () => async (ctx: Context) => {
  
  debug(`Triggered "readAllFarts" command`);
  await ctx.replyWithMarkdownV2('Nachrichten eingelesen', { parse_mode: 'Markdown' });
};

export { readAllFarts };
