const TelegramBot = require('node-telegram-bot-api');

let arr = [];

const schedule = require('node-schedule');
const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [0,3,5];
rule.hour = 0;

const token = '2084934381:AAF6WJkofwxx4kqd7JHYRh8dTwpIIlZbIo8';

const bot = new TelegramBot(token, {polling: true});
bot.setMyCommands([
    {command: '/create', description: 'Створити опитування'},
]);

bot.on('message', (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if(text==="/create@VolleyballPullSnippetsBot"||text==="/create"){
      for (let i = 0; i < arr.length; i++) {
        bot.deleteMessage(arr[i].chat.id,arr[i].id)    
      }
      bot.sendPoll(chatId, "Волейбол?",["+","-"],{"is_anonymous":"false"}).then((m)=>{
        arr.push(m);
      });
      bot.sendPoll(chatId, "Година?",["5","6","7","8","Без різниці"],{"is_anonymous":"false","allows_multiple_answers":"true"}).then((m)=>{
        arr.push(m);
      });
    }
});

const job = schedule.scheduleJob(rule, function(){
  for (let i = 0; i < arr.length; i++) {
    bot.deleteMessage(arr[i].chat.id,arr[i].id)    
  }
  bot.sendPoll(chatId, "Волейбол?",["+","-"],{"is_anonymous":"false"}).then((m)=>{
    arr.push(m);
  });
  bot.sendPoll(chatId, "Година?",["5","6","7","8","Без різниці"],{"is_anonymous":"false","allows_multiple_answers":"true"}).then((m)=>{
    arr.push(m);
  });
});
