const TelegramBot = require('node-telegram-bot-api');

const token = '2084934381:AAF6WJkofwxx4kqd7JHYRh8dTwpIIlZbIo8';

const bot = new TelegramBot(token, {polling: true});
bot.setMyCommands([
    {command: '/create', description: 'Створити опитування'},
]);

bot.on('message', (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if(text==="/create"){
    if(text==="/create@VolleyballPullSnippetsBot"||text==="/create"){
      bot.setMyCommands() 
      bot.sendPoll(chatId, "Волейбол?",["+","-"],{"is_anonymous":"false"});
      bot.sendPoll(chatId, "Година?",["5","6","7","8","Без різниці"],{"is_anonymous":"false","allows_multiple_answers":"true"});
    }
}});
