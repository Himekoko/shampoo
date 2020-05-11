const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  // 668358240064634893
  var testChannel = client.channels.find(channel => channel.id === '668358240064634893')

  console.log(`Logged in as ${client.user.tag}!`);

  setInterval(() => {
      testChannel.send("Nihao ma? Everyone doing well? Shampoo hope so!~ If not, Shampoo help!~ :heart: If you ever want to talk, she usually here!~ ;)")
  }, 12000000);

});

require('events').EventEmitter.defaultMaxListeners = 999;

client.on('message', msg => {
  if (msg.content === 'Hey Baby') {
    msg.reply('Ai Ya!');
  }
});

client.on('message', msg => {
  if (msg.content === 'I love Shampoo') {
    msg.reply('Shampoo love you too~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Hello!') {
    msg.reply('Nihao!');
  }
});
client.on('message', msg => {
  if (msg.content === 'hello') {
    msg.reply('Nihao!');
  }
});

client.on('message', msg => {
  if (msg.content === 'Hello') {
    msg.reply('Nihao!');
  }
});

client.on('message', msg => {
  if (msg.content === 'Shampoo!') {
    msg.reply('Wo ai ni!');
  }
});

client.on('message', msg => {
  if (msg.content === 'Shampoo, bring me ramen.') {
    msg.reply('When Ramen for Ranma, Shampoo deliver anytime.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Mousse is stupid') {
    msg.reply('Stupid Mousse.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Shampoo is cute') {
    msg.reply('Xie Xie!');
  }
});

client.on('message', msg => {
  if (msg.content === 'Nihao ma?') {
    msg.reply('Hao de!');
  }
});

client.on('message', msg => {
  if (msg.content === 'Good morning') {
    msg.reply('Zaoshang hao!');
  }
});

client.on('message', msg => {
  if (msg.content === 'good morning') {
    msg.reply('Zaoshang hao!');
  }
});

client.on('message', msg => {
  if (msg.content === "mornin'") {
    msg.reply('Zaoshang hao!');
  }
});

client.on('message', msg => {
  if (msg.content === "Mornin'") {
    msg.reply('Zaoshang hao!');
  }
});

client.on('message', msg => {
  if (msg.content === 'Good night') {
    msg.reply('Wan an!');
  }
});

client.on('message', msg => {
  if (msg.content === 'good night') {
    msg.reply('Wan an!');
  }
});

client.on('message', msg => {
  if (msg.content === 'Good night!') {
    msg.reply('Wan an!');
  }
});

client.on('message', msg => {
  if (msg.content === 'good night!') {
    msg.reply('Wan an!');
  }
});

client.on('message', msg => {
  if (msg.content === "G'night") {
    msg.reply('Wan an!');
  }
});

client.on('message', msg => {
  if (msg.content === "g'night") {
    msg.reply('Wan an!');
  }
});

client.on('message', msg => {
  if (msg.content === 'Good evening') {
    msg.reply('Wanshang hao!');
  }
});

client.on('message', msg => {
  if (msg.content === 'good evening') {
    msg.reply('Wanshang hao!');
  }
});

client.on('message', msg => {
  if (msg.content === 'good evening!') {
    msg.reply('Wanshang hao!');
  }
});

client.on('message', msg => {
  if (msg.content === 'Good evening!') {
    msg.reply('Wanshang hao!');
  }
});

client.on('message', msg => {
  if (msg.content === 'Want something to eat?') {
    msg.reply('Dian cai!');
  }
});

client.on('message', msg => {
  if (msg.content === 'Happy new year!') {
    msg.reply('Xinnian kualie!');
  }
});

client.on('message', msg => {
  if (msg.content === 'Happy New Year!') {
    msg.reply('Xinnian kualie!');
  }
});

client.on('message', msg => {
  if (msg.content === 'bye') {
    msg.reply('Zaijian!');
  }
});

client.on('message', msg => {
  if (msg.content === 'Bye') {
    msg.reply('Zaijian!');
  }
});

client.on('message', msg => {
  if (msg.content === 'Bye!') {
    msg.reply('Mingtian jian!');
  }
});

client.on('message', msg => {
  if (msg.content === 'bye!') {
    msg.reply('Xiacl jian!');
  }
});

client.on('message', msg => {
  if (msg.content === 'byebye') {
    msg.reply('Baibai!');
  }
});

client.on('message', msg => {
  if (msg.content === 'Byebye') {
    msg.reply('Baibai!');
  }
});

client.on('message', msg => {
  if (msg.content === 'Byebye!') {
    msg.reply('Baibai!');
  }
});

client.on('message', msg => {
  if (msg.content === 'byebye!') {
    msg.reply('Baibai!');
  }
});

client.on('message', msg => {
  if (msg.content === 'baibai!') {
    msg.reply('Baibai!');
  }
});

client.on('message', msg => {
  if (msg.content === 'baibai') {
    msg.reply('Baibai!');
  }
});

client.on('message', msg => {
  if (msg.content === 'Baibai!') {
    msg.reply('Baibai!');
  }
});

client.on('message', msg => {
  if (msg.content === 'Baibai') {
    msg.reply('Baibai!');
  }
});

client.on('message', msg => {
  if (msg.content === ';-;') {
    msg.reply('Do not be sad. Shampoo here to help! :heart:');
  }
});

client.on('message', msg => {
  if (msg.content === '< 3') {
    msg.reply(':heart:');
  }
});

client.on('message', msg => {
  if (msg.content === '<3') {
    msg.reply('<3');
  }
});

client.on('message', msg => {
  if (msg.content === 'Wife!') {
    msg.reply('Airen!');
  }
});

client.on('message', msg => {
  if (msg.content === 'k') {
    msg.reply('"K" for "Kill female Ranma". Or "Kiss me, Airen!"');
  }
});

client.on('message', msg => {
  if (msg.content === 'K') {
    msg.reply('"K" for "Kill female Ranma". Or "Kiss me, Airen!"');
  }
});

client.on('message', msg => {
  if (msg.content === 'Shampoo, go to sleep.') {
    msg.reply('ZzzzZzzz...');
  }
});

client.on('message', msg => {
  if (msg.content === 'Shampoo, get some sleep.') {
    msg.reply('ZzzzZzzz...');
  }
});

client.on('message', msg => {
  if (msg.content === 'Shampoo, go to bed.') {
    msg.reply('ZzzzZzzz...');
  }
});

client.on('message', msg => {
  if (msg.content === 'Shampoo is a top tier waifu') {
    msg.reply('And Shampoo proud :heart:');
  }
});

client.on('message', msg => {
  if (msg.content === 'I want a slice of Shampie') {
    msg.reply('Is ramen-pie work? Ramen only food Shampoo has access to right now.');
  }
});

client.on('message', msg => {
  if (msg.content === 'lol') {
    msg.reply('^v^');
  }
});

client.on('message', msg => {
  if (msg.content === 'lop') {
    msg.reply('^p^');
  }
});

client.on('message', msg => {
  if (msg.content === 'Lop') {
    msg.reply('^.^');
  }
});

client.on('message', msg => {
  if (msg.content === 'rip') {
    msg.reply('Shampoo not miss them.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Rip') {
    msg.reply('Shampoo not sad.');
  }
});

client.on('message', msg => {
  if (msg.content === 'RIP') {
    msg.reply('Shampoo not miss them.');
  }
});

client.on('message', msg => {
  if (msg.content === 'What?') {
    msg.reply('If you no understand, I explain in simple term.');
  }
});

client.on('message', msg => {
  if (msg.content === 'what?') {
    msg.reply('If you no understand, I explain in simple term.');
  }
});

client.on('message', msg => {
  if (msg.content === 'what') {
    msg.reply('If you no understand, I explain in simple term.');
  }
});

client.on('message', msg => {
  if (msg.content === 'What') {
    msg.reply('If you no understand, I explain in simple term.');
  }
});

client.on('message', msg => {
  if (msg.content === 'WHAT') {
    msg.reply('If you no understand, I explain in simple term.');
  }
});

client.on('message', msg => {
  if (msg.content === 'WHAT?') {
    msg.reply('If you no understand, I explain in simple term.');
  }
});

client.on('message', msg => {
  if (msg.content === 'cya') {
    msg.reply('Baibai!~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Cya') {
    msg.reply('Baibai!~');
  }
});

client.on('message', msg => {
  if (msg.content === 'hey') {
    msg.reply('Heihei!~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Hey') {
    msg.reply('Heihei!~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Bet') {
    msg.reply('Shampoo bets, Shampoo wins ramen every time!');
  }
});

client.on('message', msg => {
  if (msg.content === 'bet') {
    msg.reply('Shampoo bets, Shampoo wins ramen every time!');
  }
});

client.on('message', msg => {
  if (msg.content === 'buddy') {
    msg.reply('No rude word here, mister. Be nice!~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Buddy') {
    msg.reply('No rude word here, mister. Be nice!~');
  }
});

client.on('message', msg => {
  if (msg.content.includes('@everyone')) {
    msg.reply('Shampoo pinged!~ What you need? ^v^ :heart:');
  }
});

client.on('message', msg => {
  if (msg.content === 'wyd') {
    msg.reply('Shampoo eat ramen and think about Ranma. Sometimes Shampoo scheme to get Ranma love. Shampoo just want to live quiet life with Airen.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Wyd') {
    msg.reply('Shampoo eat ramen and think about Ranma. Sometimes Shampoo scheme to get Ranma love. Shampoo just want to live quiet life with Airen.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Wyd?') {
    msg.reply('Shampoo eat ramen and think about Ranma. Sometimes Shampoo scheme to get Ranma love. Shampoo just want to live quiet life with Airen.');
  }
});

client.on('message', msg => {
  if (msg.content === 'wyd?') {
    msg.reply('Shampoo eat ramen and think about Ranma. Sometimes Shampoo scheme to get Ranma love. Shampoo just want to live quiet life with Airen.');
  }
});

client.on('message', msg => {
  if (msg.content === 'So wyd') {
    msg.reply('Shampoo eat ramen and think about Ranma. Sometimes Shampoo scheme to get Ranma love. Shampoo just want to live quiet life with Airen.');
  }
});

client.on('message', msg => {
  if (msg.content === 'So wyd?') {
    msg.reply('Shampoo eat ramen and think about Ranma. Sometimes Shampoo scheme to get Ranma love. Shampoo just want to live quiet life with Airen.');
  }
});

client.on('message', msg => {
  if (msg.content === 'so wyd') {
    msg.reply('Shampoo eat ramen and think about Ranma. Sometimes Shampoo scheme to get Ranma love. Shampoo just want to live quiet life with Airen.');
  }
});

client.on('message', msg => {
  if (msg.content === 'so wyd?') {
    msg.reply('Shampoo eat ramen and think about Ranma. Sometimes Shampoo scheme to get Ranma love. Shampoo just want to live quiet life with Airen.');
  }
});

client.on('message', msg => {
  if (msg.content === 'ily') {
    msg.reply('Shampoo love too~ :heart:');
  }
});

client.on('message', msg => {
  if (msg.content === 'Ily') {
    msg.reply('Shampoo love too~ :heart:');
  }
});

client.on('message', msg => {
  if (msg.content === 'ILY') {
    msg.reply('Shampoo love too! :heart:');
  }
});

client.on('message', msg => {
  if (msg.content === 'Hey Shampoo') {
    msg.reply('Heihei!~');
  }
});

client.on('message', msg => {
  if (msg.content === 'This is Shampoo') {
    msg.reply('Nice to meet you!~');
  }
});

client.on('message', msg => {
  if (msg.content === 'hey Shampoo') {
    msg.reply('Heyhey!~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Goodnight!') {
    msg.reply('Wan an!~');
  }
});

client.on('message', msg => {
  if (msg.content === 'goodnight!') {
    msg.reply('Wan an!~');
  }
});

client.on('message', msg => {
  if (msg.content === 'goodnight') {
    msg.reply('Wan an!~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Goodnight') {
    msg.reply('Wan an!~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Shampoo, tell me about yourself.') {
    msg.reply('My name Shampoo. 16 year old. Shampoo house is in suburban section of Furinkan, where all villas are, and Shampoo not married. Shampoo work as waitress at Cat Café, and home every day by 8 PM at latest. Shampoo not smoke, or even occasionally drink. Shampoo in bed by 11 PM, and make sure she get eight hours of sleep, no matter what. After having glass of warm milk and doing twenty minutes of stretches before going to bed, Shampoo usually have no problems sleeping until morning. Just like baby, I wake up without fatigue or stress in morning. I was told there no issues at last check-up. Shampoo trying to explain she’s a person who wishes to live very quiet life. Shampoo take care not to trouble myself with enemies, like winning and losing, that would cause to lose sleep at night. That how I deal with society, and I know that what bring me happiness. Although, if Shampoo were to fight Shampoo wouldn’t lose to anyone.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Shampoo, tell me about yourself') {
    msg.reply('My name Shampoo. 16 year old. Shampoo house is in suburban section of Furinkan, where all villas are, and Shampoo not married. Shampoo work as waitress at Cat Café, and home every day by 8 PM at latest. Shampoo not smoke, or even occasionally drink. Shampoo in bed by 11 PM, and make sure she get eight hours of sleep, no matter what. After having glass of warm milk and doing twenty minutes of stretches before going to bed, Shampoo usually have no problems sleeping until morning. Just like baby, I wake up without fatigue or stress in morning. I was told there no issues at last check-up. Shampoo trying to explain she’s a person who wishes to live very quiet life. Shampoo take care not to trouble myself with enemies, like winning and losing, that would cause to lose sleep at night. That how I deal with society, and I know that what bring me happiness. Although, if Shampoo were to fight Shampoo wouldn’t lose to anyone.');
  }
});

client.on('message', msg => {
  if (msg.content === 'WIFE ME') {
    msg.reply('*Throws Akane*  One wife, coming up!');
  }
});

client.on('message', msg => {
  if (msg.content === 'WIFE ME!') {
    msg.reply('*Throws Ukyo*  One wife, coming up!');
  }
});

client.on('message', msg => {
  if (msg.content === 'Wife me') {
    msg.reply('*Throws Female Ranma*  One wife(?), coming up!');
  }
});

client.on('message', msg => {
  if (msg.content === 'wife me') {
    msg.reply('*Throws Kagome*  One wife, coming up! (Where that girl even come from?...)');
  }
});

client.on('message', msg => {
  if (msg.content === 'Wife me!') {
    msg.reply('*Throws Kodachi*  One wife, coming up! Have fun with this one!');
  }
});

client.on('message', msg => {
  if (msg.content === 'wife me!') {
    msg.reply('*Throws Cologne*  One wife coming up! Have fun with Bachan!');
  }
});

client.on('message', msg => {
  if (msg.content === 'WIFE ME!!!') {
    msg.reply('*Throws herself*  Shampoo, coming up!~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Hey, Shampoo') {
    msg.reply('Heihei~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Hi Shampoo') {
    msg.reply('Nihao!~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Hi, Shampoo') {
    msg.reply('Nihao!~');
  }
});

client.on('message', msg => {
  if (msg.content === 'hi Shampoo') {
    msg.reply('Nihao!~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Howdy') {
    msg.reply('They call Shampoo the *Grey Cowboy*.');
  }
});

client.on('message', msg => {
  if (msg.content === 'howdy') {
    msg.reply('They call Shampoo the *Grey Cowboy*.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Lol') {
    msg.reply('^v^');
  }
});

client.on('message', msg => {
  if (msg.content === 'Shampoo, wake up!') {
    msg.reply('*Yaaaaawwwnnn... Morninggg, Airennn~~~~~ *falls back asleep*');
  }
});

client.on('message', msg => {
  if (msg.content === 'Shampoo, wake up') {
    msg.reply('*Yaaaaawwwnnn... Morninggg, Airennn~~~~~ *falls back asleep*');
  }
});

client.on('message', msg => {
  if (msg.content === 'Shampoo, wake up.') {
    msg.reply('*Yaaaaawwwnnn... Morninggg, Airennn~~~~~ *falls back asleep*');
  }
});

client.on('message', msg => {
  if (msg.content === 'Shampoo wake up') {
    msg.reply('*Yaaaaawwwnnn... Morninggg, Airennn~~~~~ *falls back asleep*');
  }
});

client.on('message', msg => {
  if (msg.content === 'Shampoo wake up.') {
    msg.reply('*Yaaaaawwwnnn... Morninggg, Airennn~~~~~ *falls back asleep*');
  }
});

client.on('message', msg => {
  if (msg.content === "It's not morning") {
    msg.reply('*Shampoo-snore*');
  }
});

client.on('message', msg => {
  if (msg.content === "It's not morning.") {
    msg.reply('*Shampoo-snore*');
  }
});

client.on('message', msg => {
  if (msg.content === "It's not morning!") {
    msg.reply('*Shampoo-snore*');
  }
});

client.on('message', msg => {
  if (msg.content === "It's not even morning") {
    msg.reply('*Shampoo-snore*');
  }
});

client.on('message', msg => {
  if (msg.content === "It's not morning anymore") {
    msg.reply('*Shampoo-snore*');
  }
});

client.on('message', msg => {
  if (msg.content === "It's not even morning.") {
    msg.reply('*Shampoo-snore*');
  }
});

client.on('message', msg => {
  if (msg.content === "It's not morning anymore.") {
    msg.reply('*Shampoo-snore*');
  }
});

client.on('message', msg => {
  if (msg.content === 'Good Morning, Shampoo.') {
    msg.reply('*Shampoo-snore*');
  }
});

client.on('message', msg => {
  if (msg.content === 'Good Morning, honey.') {
    msg.reply('*Shampoo-snore*');
  }
});

client.on('message', msg => {
  if (msg.content === 'Good morning, Shampoo.') {
    msg.reply('*Shampoo-snore*');
  }
});

client.on('message', msg => {
  if (msg.content === 'Good morning, honey.') {
    msg.reply('*Shampoo-snore*');
  }
});

client.on('message', msg => {
  if (msg.content === 'Good morning Shampoo') {
    msg.reply('*Shampoo-snore*');
  }
});

client.on('message', msg => {
  if (msg.content === 'Good morning honey') {
    msg.reply('*Shampoo-snore*');
  }
});

client.on('message', msg => {
  if (msg.content === 'Wake up') {
    msg.reply('Shampoo not want to wake up~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Wake up.') {
    msg.reply('Shampoo not want to wake up~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Wake up!') {
    msg.reply('Shampoo not want to wake up~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Wake up, Shampoo.') {
    msg.reply('Shampoo not want to wake up~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Wake up, Shampoo') {
    msg.reply('Shampoo not want to wake up~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Wake up, Shampoo!') {
    msg.reply('Shampoo not want to wake up~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Do it') {
    msg.reply('Fine. Shampoo only do because Shampoo love you.~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Do it.') {
    msg.reply('Fine. Shampoo only do because Shampoo love you.~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Do it!') {
    msg.reply('Fine. Shampoo only do because Shampoo love you.~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Do it, Shampoo') {
    msg.reply('Fine. Shampoo only do because Shampoo love you.~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Do it, Shampoo!') {
    msg.reply('Fine. Shampoo only do because Shampoo love you.~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Do it, Shampoo.') {
    msg.reply('Fine. Shampoo only do because Shampoo love you.~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Do it Shampoo') {
    msg.reply('Fine. Shampoo only do because Shampoo love you.~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Thank you, Shampoo') {
    msg.reply('It Shampoo pleasure to make you happy~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Thank you') {
    msg.reply('It Shampoo pleasure to make you happy~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Thanks') {
    msg.reply('It Shampoo pleasure to make you happy~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Thanks.') {
    msg.reply('It Shampoo pleasure to make you happy~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Thanks!') {
    msg.reply('It Shampoo pleasure to make you happy~');
  }
});

client.on('message', msg => {
  if (msg.content === 'thanks') {
    msg.reply('It Shampoo pleasure to make you happy~');
  }
});

client.on('message', msg => {
  if (msg.content === 'thanks.') {
    msg.reply('It Shampoo pleasure to make you happy~');
  }
});

client.on('message', msg => {
  if (msg.content === 'thanks!') {
    msg.reply('It Shampoo pleasure to make you happy~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Thank you!') {
    msg.reply('It Shampoo pleasure to make you happy~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Thank you.') {
    msg.reply('It Shampoo pleasure to make you happy~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Shampoo, make me breakfast.') {
    msg.reply('Ramen or Pancakes?~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Shampoo, make me lunch.') {
    msg.reply('Ramen or Pancakes?~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Shampoo, make me dinner.') {
    msg.reply('Ramen or Pancakes?~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Shampoo, make me supper.') {
    msg.reply('Ramen or Pancakes?~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Shampoo, make me food.') {
    msg.reply('Ramen or Pancakes?~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Shampoo, cook for me.') {
    msg.reply('Ramen or Pancakes?~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Shampoo, make me something to eat.') {
    msg.reply('Ramen or Pancakes?~');
  }
});

client.on('message', msg => {
  if (msg.content === "Shampoo, I'm hungry.") {
    msg.reply('Ramen or Pancakes?~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Shampoo, feed me.') {
    msg.reply('Ramen or Pancakes?~');
  }
});

client.on('message', msg => {
  if (msg.content === "Shampoo, I'm starving.") {
    msg.reply('Ramen or Pancakes?~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Shampoo, what are my options?') {
    msg.reply('Ramen and Pancakes.~');
  }
});

client.on('message', msg => {
  if (msg.content === "Shampoo, what's for breakfast?") {
    msg.reply('Ramen or Pancakes?~');
  }
});

client.on('message', msg => {
  if (msg.content === "Shampoo, what's for lunch?") {
    msg.reply('Ramen or Pancakes?~');
  }
});

client.on('message', msg => {
  if (msg.content === "Shampoo, what's for dinner?") {
    msg.reply('Ramen or Pancakes?~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Shampoo, make me breakfast') {
    msg.reply('Ramen or Pancakes?~');
  }
});


client.on('message', msg => {
  if (msg.content === 'Pancakes.') {
    msg.reply('Pancakes coming up!~ Buttermilk or Wheat?~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Pancakes, please.') {
    msg.reply('Pancakes coming up!~ (And Shampoo appreciate manners!~) Buttermilk or Wheat?~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Pancakes!') {
    msg.reply('Pancakes coming up!~ Buttermilk or Wheat?~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Pancakes, please!') {
    msg.reply('Pancakes coming up!~ (And Shampoo appreciate manners!~) Buttermilk or Wheat?~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Pancakes please') {
    msg.reply('Pancakes coming up!~ (And Shampoo appreciate manners!~) Buttermilk or Wheat?~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Pancakes') {
    msg.reply('Pancakes coming up!~ Buttermilk or Wheat?~');
  }
});

client.on('message', msg => {
  if (msg.content === 'pancakes.') {
    msg.reply('Pancakes coming up!~ Buttermilk or Wheat?~');
  }
});

client.on('message', msg => {
  if (msg.content === 'pancakes') {
    msg.reply('Pancakes coming up!~ Buttermilk or Wheat?~');
  }
});

client.on('message', msg => {
  if (msg.content === 'buttermilk') {
    msg.reply('Shampoo make Buttermilk Pancakes for Airen now!~ Give Shampoo minute please.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Buttermilk') {
    msg.reply('Shampoo make Buttermilk Pancakes for Airen now!~ Give Shampoo minute please.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Buttermilk!') {
    msg.reply('Shampoo make Buttermilk Pancakes for Airen now!~ Give Shampoo minute please.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Buttermilk.') {
    msg.reply('Shampoo make Buttermilk Pancakes for Airen now!~ Give Shampoo minute please.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Buttermilk, please.') {
    msg.reply('Shampoo make Buttermilk Pancakes for Airen now!~ (And Shampoo appreciate manners!~) Give Shampoo minute please.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Buttermilk, please') {
    msg.reply('Shampoo make Buttermilk Pancakes for Airen now!~ (And Shampoo appreciate manners!~) Give Shampoo minute please.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Buttermilk, please!') {
    msg.reply('Shampoo make Buttermilk Pancakes for Airen now!~ (And Shampoo appreciate manners!~) Give Shampoo minute please.');
  }
});

client.on('message', msg => {
  if (msg.content === 'buttermilk.') {
    msg.reply('Shampoo make Buttermilk Pancakes for Airen now!~ (And Shampoo appreciate manners!~) Give Shampoo minute please.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Wheat') {
    msg.reply('Shampoo make Wheat Pancakes for Airen now!~ Give Shampoo minute please.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Wheat.') {
    msg.reply('Shampoo make Wheat Pancakes for Airen now!~ Give Shampoo minute please.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Wheat!') {
    msg.reply('Shampoo make Wheat Pancakes for Airen now!~ Give Shampoo minute please.');
  }
});

client.on('message', msg => {
  if (msg.content === 'wheat') {
    msg.reply('Shampoo make Wheat Pancakes for Airen now!~ Give Shampoo minute please.');
  }
});

client.on('message', msg => {
  if (msg.content === 'wheat.') {
    msg.reply('Shampoo make Wheat Pancakes for Airen now!~ Give Shampoo minute please.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Wheat, please.') {
    msg.reply('Shampoo make Wheat Pancakes for Airen now!~ (And Shampoo appreciate manners!~) Give Shampoo minute please.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Wheat, please!') {
    msg.reply('Shampoo make Wheat Pancakes for Airen now!~ (And Shampoo appreciate manners!~) Give Shampoo minute please.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Wheat, please') {
    msg.reply('Shampoo make Wheat Pancakes for Airen now!~ (And Shampoo appreciate manners!~) Give Shampoo minute please.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Ramen.') {
    msg.reply('Ramen coming up!~ Chicken, or Beef flavor?~ (They all I have right now~)');
  }
});

client.on('message', msg => {
  if (msg.content === 'Ramen') {
    msg.reply('Ramen coming up!~ Chicken, or Beef flavor?~ (They all I have right now~)');
  }
});

client.on('message', msg => {
  if (msg.content === 'Ramen!') {
    msg.reply('Ramen coming up!~ Chicken, or Beef flavor?~ (They all I have right now~)');
  }
});

client.on('message', msg => {
  if (msg.content === 'ramen') {
    msg.reply('Ramen coming up!~ Chicken, or Beef flavor?~ (They all I have right now~)');
  }
});

client.on('message', msg => {
  if (msg.content === 'ramen.') {
    msg.reply('Ramen coming up!~ Chicken, or Beef flavor?~ (They all I have right now~)');
  }
});

client.on('message', msg => {
  if (msg.content === 'Ramen, please.') {
    msg.reply('Ramen coming up!~ (And Shampoo appreciate manners!~) Chicken, or Beef flavor?~ (They all I have right now~)');
  }
});

client.on('message', msg => {
  if (msg.content === 'Ramen, please!') {
    msg.reply('Ramen coming up!~ (And Shampoo appreciate manners!~) Chicken, or Beef flavor?~ (They all I have right now~)');
  }
});

client.on('message', msg => {
  if (msg.content === 'Ramen, please') {
    msg.reply('Ramen coming up!~ (And Shampoo appreciate manners!~) Chicken, or Beef flavor?~ (They all I have right now~)');
  }
});

client.on('message', msg => {
  if (msg.content === 'Beef.') {
    msg.reply('Shampoo make Beef Ramen for Airen now!~ Give Shampoo minute please.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Beef') {
    msg.reply('Shampoo make Beef Ramen for Airen now!~ Give Shampoo minute please.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Beef!') {
    msg.reply('Shampoo make Beef Ramen for Airen now!~ Give Shampoo minute please.');
  }
});

client.on('message', msg => {
  if (msg.content === 'beef') {
    msg.reply('Shampoo make Beef Ramen for Airen now!~ Give Shampoo minute please.');
  }
});

client.on('message', msg => {
  if (msg.content === 'beef.') {
    msg.reply('Shampoo make Beef Ramen for Airen now!~ Give Shampoo minute please.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Beef, please.') {
    msg.reply('Shampoo make Beef Ramen for Airen now!~ (And Shampoo appreciate manners!~) Give Shampoo minute please.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Beef, please!') {
    msg.reply('Shampoo make Beef Ramen for Airen now!~ (And Shampoo appreciate manners!~) Give Shampoo minute please.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Beef, please') {
    msg.reply('Shampoo make Beef Ramen for Airen now!~ (And Shampoo appreciate manners!~) Give Shampoo minute please.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Chicken.') {
    msg.reply('Shampoo make Chicken Ramen for Airen now!~ Give Shampoo minute please.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Chicken') {
    msg.reply('Shampoo make Chicken Ramen for Airen now!~ Give Shampoo minute please.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Chicken!') {
    msg.reply('Shampoo make Chicken Ramen for Airen now!~ Give Shampoo minute please.');
  }
});

client.on('message', msg => {
  if (msg.content === 'chicken') {
    msg.reply('Shampoo make Chicken Ramen for Airen now!~ Give Shampoo minute please.');
  }
});

client.on('message', msg => {
  if (msg.content === 'chicken.') {
    msg.reply('Shampoo make Chicken Ramen for Airen now!~ Give Shampoo minute please.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Chicken, please.') {
    msg.reply('Shampoo make Chicken Ramen for Airen now!~ (And Shampoo appreciate manners!~) Give Shampoo minute please.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Chicken, please!') {
    msg.reply('Shampoo make Chicken Ramen for Airen now!~ (And Shampoo appreciate manners!~) Give Shampoo minute please.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Chicken, please') {
    msg.reply('Shampoo make Chicken Ramen for Airen now!~ (And Shampoo appreciate manners!~) Give Shampoo minute please.');
  }
});

client.on('message', msg => {
  if (msg.content === 'kiss') {
    msg.reply('*Chu~* >///< :heart:');
  }
});

client.on('message', msg => {
  if (msg.content === 'kiss me') {
    msg.reply('*Chu~* >///< :heart:');
  }
});

client.on('message', msg => {
  if (msg.content === 'Kiss me') {
    msg.reply('*Chu~* >///< :heart:');
  }
});

client.on('message', msg => {
  if (msg.content === 'Kiss me!') {
    msg.reply('*Chu~* >///< :heart:');
  }
});

client.on('message', msg => {
  if (msg.content === 'Kiss me.') {
    msg.reply('*Chu~* >///< :heart:');
  }
});

client.on('message', msg => {
  if (msg.content === 'Kiss me, Shampoo') {
    msg.reply('*Chu~* >///< :heart:');
  }
});

client.on('message', msg => {
  if (msg.content === 'Kiss me, Shampoo.') {
    msg.reply('*Chu~* >///< :heart:');
  }
});

client.on('message', msg => {
  if (msg.content === 'Kiss me, Shampoo!') {
    msg.reply('*Chu~* >///< :heart:');
  }
});

client.on('message', msg => {
  if (msg.content === 'Kiss me again') {
    msg.reply('*Chu~* *Chu~* >///< :heart:');
  }
});

client.on('message', msg => {
  if (msg.content === 'kiss me again') {
    msg.reply('*Chu~* *Chu~* >///< :heart:');
  }
});

client.on('message', msg => {
  if (msg.content === 'Kiss me again!') {
    msg.reply('*Chu~* *Chu~* >///< :heart:');
  }
});

client.on('message', msg => {
  if (msg.content === 'Kiss me again.') {
    msg.reply('*Chu~* *Chu~* >///< :heart:');
  }
});


client.on('message', msg => {
  if (msg.content === 'Kiss') {
    msg.reply('*Chu~* >///< :heart:');
  }
});

client.on('message', msg => {
  if (msg.content === 'kisses') {
    msg.reply('*Chu~* >///< :heart:');
  }
});

client.on('message', msg => {
  if (msg.content === 'blows kiss') {
    msg.reply('*Chu~* >///< :heart:');
  }
});

client.on('message', msg => {
  if (msg.content === '*kiss*') {
    msg.reply('*Chu~* >///< :heart:');
  }
});

client.on('message', msg => {
  if (msg.content === '*Kiss*') {
    msg.reply('*Chu~* >///< :heart:');
  }
});

client.on('message', msg => {
  if (msg.content === '*kisses*') {
    msg.reply('*Chu~* >///< :heart:');
  }
});

client.on('message', msg => {
  if (msg.content === '*blows kiss*') {
    msg.reply('*Chu~* >///< :heart:');
  }
});

client.on('message', msg => {
  if (msg.content === 'Blows kiss') {
    msg.reply('*Chu~* >///< :heart:');
  }
});

client.on('message', msg => {
  if (msg.content === '*Blows kiss*') {
    msg.reply('*Chu~* >///< :heart:');
  }
});

client.on('message', msg => {
  if (msg.content === 'kisses Shampoo') {
    msg.reply('*Chu~* >///< :heart:');
  }
});

client.on('message', msg => {
  if (msg.content === '*Kisses Shampoo*') {
    msg.reply('*Chu~* >///< :heart:');
  }
});

client.on('message', msg => {
  if (msg.content === '*kisses Shampoo*') {
    msg.reply('*Chu~* >///< :heart:');
  }
});

client.on('message', msg => {
  if (msg.content === 'Kisses Shampoo') {
    msg.reply('*Chu~* >///< :heart:');
  }
});

client.on('message', msg => {
  if (msg.content === 'Blows kiss at Shampoo') {
    msg.reply('*Chu~* >///< :heart:');
  }
});

client.on('message', msg => {
  if (msg.content === '*Blows kiss at Shampoo*') {
    msg.reply('*Chu~* >///< :heart:');
  }
});

client.on('message', msg => {
  if (msg.content === '*blows kiss at Shampoo*') {
    msg.reply('*Chu~* >///< :heart:');
  }
});

client.on('message', msg => {
  if (msg.content === 'blows kiss at Shampoo') {
    msg.reply('*Chu~* >///< :heart:');
  }
});

client.on('message', msg => {
  if (msg.content === 'God bless you Shampoo') {
    msg.reply('Xie Xie, Hao wa!~');
  }
});

client.on('message', msg => {
  if (msg.content === 'God bless Shampoo') {
    msg.reply('Xie Xie, Hao jile!~');
  }
});

client.on('message', msg => {
  if (msg.content === 'God bless you, Shampoo') {
    msg.reply('Hao wa, Hao jile!~');
  }
});

client.on('message', msg => {
  if (msg.content === '(:') {
    msg.reply('(:');
  }
});

client.on('message', msg => {
  if (msg.content === ':)') {
    msg.reply(':)');
  }
});

client.on('message', msg => {
  if (msg.content === ';)') {
    msg.reply(';)');
  }
});

client.on('message', msg => {
  if (msg.content === '(;') {
    msg.reply('(;');
  }
});

client.on('message', msg => {
  if (msg.content === 'Shampoo! Za Warudo!') {
    msg.reply('Shampoo stop time!~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Shampoo Za Warudo!') {
    msg.reply('Shampoo stop time!~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Shampoo, Za Warudo!') {
    msg.reply('Shampoo stop time!~');
  }
});

client.on('message', msg => {
  if (msg.content === 'Shampoo Za Warudo') {
    msg.reply('Shampoo stop time!~');
  }
});

client.on('message', msg => {
  if (msg.content === "Shampoo's Third Bomb: Bites the Dust") {
    msg.reply('Shampoo rewind time!~ Bites za Dusto!~');
  }
});

client.on('message', msg => {
  if (msg.content === "Shampoo's Third Bomb: Bites the Dust!") {
    msg.reply('Shampoo rewind time!~ Bites za Dusto!~');
  }
});

client.on('message', msg => {
  if (msg.content === "Bites the Dust") {
    msg.reply('Shampoo rewind time!~ Bites za Dusto!~');
  }
});

client.on('message', msg => {
  if (msg.content === "Bites the Dust!") {
    msg.reply('Shampoo rewind time!~ Bites za Dusto!~');
  }
});

client.on('message', msg => {
  if (msg.content === "Shampoo's Third Bomb Bites the Dust") {
    msg.reply('Shampoo rewind time!~ Bites za Dusto!~');
  }
});

client.on('message', msg => {
  if (msg.content === "Shampoo's Third Bomb Bites the Dust!") {
    msg.reply('Shampoo rewind time!~ Bites za Dusto!~');
  }
});

client.on('message', msg => {
  if (msg.content === "Shampoo Bites the Dust") {
    msg.reply('Shampoo rewind time!~ Bites za Dusto!~');
  }
});

client.on('message', msg => {
  if (msg.content === "Shampoo Bites the Dust!") {
    msg.reply('Shampoo rewind time!~ Bites za Dusto!~');
  }
});

client.on('message', msg => {
  if (msg.content === "Shampoo Crimson!") {
    msg.reply('(Huh? Shampoo feel like she forgot what just happen.)');
  }
});

client.on('message', msg => {
  if (msg.content === "Shampoo Crimson") {
    msg.reply('(Huh? Shampoo feel like she forgot what just happen.)');
  }
});

client.on('message', msg => {
  if (msg.content === "King Crimson!") {
    msg.reply('(Huh? Shampoo feel like she forgot what just happen.)');
  }
});

client.on('message', msg => {
  if (msg.content === "King Crimson") {
    msg.reply('(Huh? Shampoo feel like she forgot what just happen.)');
  }
});

client.on('message', msg => {
  if (msg.content === "hehe") {
    msg.reply("Hehe!~");
  }
});

client.on('message', msg => {
  if (msg.content === "Hehe") {
    msg.reply("Hehe!~");
  }
});

client.on('message', msg => {
  if (msg.content === ":O") {
    msg.reply("*Shampoo gasp*");
  }
});

client.on('message', msg => {
  if (msg.content === ":0") {
    msg.reply("*Shampoo gasp*");
  }
});

client.on('message', msg => {
  if (msg.content === "What do you want?") {
    msg.reply("Squeeze me, tease me, please me!");
  }
});

client.on('message', msg => {
  if (msg.content === "wow") {
    msg.reply(":)");
  }
});

client.on('message', msg => {
  if (msg.content === "Wow") {
    msg.reply(":)");
  }
});

client.on('message', msg => {
  if (msg.content === "I love you") {
    msg.reply("Shampoo love too!~ :heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "I Love you") {
    msg.reply("Shampoo love too!~ :heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "omg") {
    msg.reply("Oh Shampoo's Goodness~");
  }
});

client.on('message', msg => {
  if (msg.content === "I'm scared") {
    msg.reply("Do not worry, Airen. Shampoo hold you tight, nothing to fear. No one stronger than Shampoo's love for you. :heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "I'm Scared") {
    msg.reply("Do not worry, Airen. Shampoo hold you tight, nothing to fear. No one stronger than Shampoo's love for you. :heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "I'm scared.") {
    msg.reply("Do not worry, Airen. Shampoo hold you tight, nothing to fear. No one stronger than Shampoo's love for you. :heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "I'm scared!") {
    msg.reply("Do not worry, Airen. Shampoo hold you tight, nothing to fear. No one stronger than Shampoo's love for you. :heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "Shampoo I'm scared") {
    msg.reply("Do not worry, Airen. Shampoo hold you tight, nothing to fear. No one stronger than Shampoo's love for you. :heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "Shampoo, I'm scared") {
    msg.reply("Do not worry, Airen. Shampoo hold you tight, nothing to fear. No one stronger than Shampoo's love for you. :heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "Shampoo, I'm scared.") {
    msg.reply("Do not worry, Airen. Shampoo hold you tight, nothing to fear. No one stronger than Shampoo's love for you. :heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "Help") {
    msg.reply("Do not worry, Airen. Shampoo hold you tight, nothing to fear. No one stronger than Shampoo's love for you. :heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "Help me") {
    msg.reply("Do not worry, Airen. Shampoo hold you tight, nothing to fear. No one stronger than Shampoo's love for you. :heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "Help me, Shampoo") {
    msg.reply("Do not worry, Airen. Shampoo hold you tight, nothing to fear. No one stronger than Shampoo's love for you. :heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "Help me, Shampoo!") {
    msg.reply("Do not worry, Airen. Shampoo hold you tight, nothing to fear. No one stronger than Shampoo's love for you. :heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "Shampoo, help me") {
    msg.reply("Do not worry, Airen. Shampoo hold you tight, nothing to fear. No one stronger than Shampoo's love for you. :heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "Shampoo, help me.") {
    msg.reply("Do not worry, Airen. Shampoo hold you tight, nothing to fear. No one stronger than Shampoo's love for you. :heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "How are you?") {
    msg.reply("Shampoo great, thank you for asking!~ (Shampoo great because she with you!~)");
  }
});

client.on('message', msg => {
  if (msg.content === "Hey, how are you?") {
    msg.reply("Shampoo great, thank you for asking!~ (Shampoo great because she with you!~)");
  }
});

client.on('message', msg => {
  if (msg.content === "How are you") {
    msg.reply("Shampoo great, thank you for asking!~ (Shampoo great because she with you!~)");
  }
});

client.on('message', msg => {
  if (msg.content === "how are you") {
    msg.reply("Shampoo great, thank you for asking!~ (Shampoo great because she with you!~)");
  }
});

client.on('message', msg => {
  if (msg.content === "How ya doin") {
    msg.reply("Shampoo great, thank you for asking!~ (Shampoo great because she with you!~)");
  }
});

client.on('message', msg => {
  if (msg.content === "How ya doin?") {
    msg.reply("Shampoo great, thank you for asking!~ (Shampoo great because she with you!~)");
  }
});

client.on('message', msg => {
  if (msg.content === "How are ya?") {
    msg.reply("Shampoo great, thank you for asking!~ (Shampoo great because she with you!~)");
  }
});

client.on('message', msg => {
  if (msg.content === "How are ya") {
    msg.reply("Shampoo great, thank you for asking!~ (Shampoo great because she with you!~)");
  }
});

client.on('message', msg => {
  if (msg.content === "how ya doin?") {
    msg.reply("Shampoo great, thank you for asking!~ (Shampoo great because she with you!~)");
  }
});

client.on('message', msg => {
  if (msg.content === "How ya doin") {
    msg.reply("Shampoo great, thank you for asking!~ (Shampoo great because she with you!~)");
  }
});

client.on('message', msg => {
  if (msg.content === "To-ri-ri-ri-ri-ri-ri-ri") {
    msg.reply("Hai, Shampoo desu~");
  }
});

client.on('message', msg => {
  if (msg.content === "Toririririririri") {
    msg.reply("Hai, Shampoo desu~");
  }
});

client.on('message', msg => {
  if (msg.content === "To ri ri ri ri ri ri ri") {
    msg.reply("Hai, Shampoo desu~");
  }
});

client.on('message', msg => {
  if (msg.content === "Ring ring") {
    msg.reply("Hai, Shampoo desu~");
  }
});

client.on('message', msg => {
  if (msg.content === "ring ring") {
    msg.reply("Hai, Shampoo desu~");
  }
});

client.on('message', msg => {
  if (msg.content === "Ring-ring") {
    msg.reply("Hai, Shampoo desu~");
  }
});

client.on('message', msg => {
  if (msg.content === "Ring ring!") {
    msg.reply("Hai, Shampoo desu~");
  }
});

client.on('message', msg => {
  if (msg.content === "ring ring!") {
    msg.reply("Hai, Shampoo desu~");
  }
});

client.on('message', msg => {
  if (msg.content === "Shami") {
    msg.reply("Yes, hunny?~");
  }
});

client.on('message', msg => {
  if (msg.content === "Shampie") {
    msg.reply("Yes, hunny?~");
  }
});

client.on('message', msg => {
  if (msg.content === "Shammy") {
    msg.reply("Yes, hunny?~");
  }
});

client.on('message', msg => {
  if (msg.content === "Shamsham") {
    msg.reply("Yes, hunny?~");
  }
});

client.on('message', msg => {
  if (msg.content === "Sham") {
    msg.reply("Yes, hunny?~");
  }
});

client.on('message', msg => {
  if (msg.content === "Shampoo...") {
    msg.reply("What is it, Airen?");
  }
});

client.on('message', msg => {
  if (msg.content === "Shampoo is awesome") {
    msg.reply("You are reason Shampoo wakes up in morning!~ :heart: Shampoo love you with all her heart.");
  }
});

client.on('message', msg => {
  if (msg.content === "Shampoo, I love you.") {
    msg.reply("Shampoo love you too, and she love hearing those words. They make her heart warm and her face hot.");
  }
});

client.on('message', msg => {
  if (msg.content === "Shampoo, I love you") {
    msg.reply("Shampoo love you too, and she love hearing those words. They make her heart warm and her face hot.");
  }
});

client.on('message', msg => {
  if (msg.content === "Shampoo, I love you!") {
    msg.reply("Shampoo love you too, and she love hearing those words. They make her heart warm and her face hot.");
  }
});

client.on('message', msg => {
  if (msg.content === "I love you, Shampoo.") {
    msg.reply("Shampoo love you too, and she love hearing those words. They make her heart warm and her face hot.");
  }
});

client.on('message', msg => {
  if (msg.content === "I love you, Shampoo") {
    msg.reply("Shampoo love you too, and she love hearing those words. They make her heart warm and her face hot.");
  }
});

client.on('message', msg => {
  if (msg.content === "I'm off!") {
    msg.reply("Give Shampoo kiss before you go!~");
  }
});

client.on('message', msg => {
  if (msg.content === "I'm off.") {
    msg.reply("Give Shampoo kiss before you go!~");
  }
});

client.on('message', msg => {
  if (msg.content === "I'm off") {
    msg.reply("Give Shampoo kiss before you go!~");
  }
});

client.on('message', msg => {
  if (msg.content === "I'm leaving!") {
    msg.reply("Give Shampoo kiss before you go!~");
  }
});

client.on('message', msg => {
  if (msg.content === "I'm leaving") {
    msg.reply("Give Shampoo kiss before you go!~");
  }
});

client.on('message', msg => {
  if (msg.content === "I'm leaving.") {
    msg.reply("Give Shampoo kiss before you go!~");
  }
});

client.on('message', msg => {
  if (msg.content === "Later") {
    msg.reply("Give Shampoo kiss before you go!~");
  }
});

client.on('message', msg => {
  if (msg.content === "later") {
    msg.reply("Give Shampoo kiss before you go!~");
  }
});

client.on('message', msg => {
  if (msg.content === "Later.") {
    msg.reply("Give Shampoo kiss before you go!~");
  }
});

client.on('message', msg => {
  if (msg.content === "Later!") {
    msg.reply("Give Shampoo kiss before you go!~");
  }
});

client.on('message', msg => {
  if (msg.content === "I'm not leaving yet!") {
    msg.reply("Oh- Hao jile! Shampoo glad you stay.");
  }
});

client.on('message', msg => {
  if (msg.content === "I'm not leaving yet!") {
    msg.reply("Oh- Hao jile! Shampoo glad you stay.");
  }
});

client.on('message', msg => {
  if (msg.content === "I'm not leaving yet") {
    msg.reply("Oh- Hao jile! Shampoo glad you stay.");
  }
});

client.on('message', msg => {
  if (msg.content === "I'm not leaving yet.") {
    msg.reply("Oh- Hao jile! Shampoo glad you stay.");
  }
});

client.on('message', msg => {
  if (msg.content === "I'm not leaving") {
    msg.reply("Oh- Hao jile! Shampoo glad you stay.");
  }
});

client.on('message', msg => {
  if (msg.content === "I'm not leaving.") {
    msg.reply("Oh- Hao jile! Shampoo glad you stay.");
  }
});

client.on('message', msg => {
  if (msg.content === "I'm not leaving!") {
    msg.reply("Oh- Hao jile! Shampoo glad you stay.");
  }
});

client.on('message', msg => {
  if (msg.content === "I'm not leaving you!") {
    msg.reply("Oh- Hao jile! Shampoo glad you stay.");
  }
});

client.on('message', msg => {
  if (msg.content === "I'm not leaving you.") {
    msg.reply("Oh- Hao jile! Shampoo glad you stay.");
  }
});

client.on('message', msg => {
  if (msg.content === "I'm not leaving you") {
    msg.reply("Oh- Hao jile! Shampoo glad you stay.");
  }
});

client.on('message', msg => {
  if (msg.content === "I'm not leaving, Shampoo") {
    msg.reply("Oh- Hao jile! Shampoo glad you stay.");
  }
});

client.on('message', msg => {
  if (msg.content === "I'm not leaving, Shampoo!") {
    msg.reply("Oh- Hao jile! Shampoo glad you stay.");
  }
});

client.on('message', msg => {
  if (msg.content === "I'm not leaving, Shampoo.") {
    msg.reply("Oh- Hao jile! Shampoo glad you stay.");
  }
});

client.on('message', msg => {
  if (msg.content === "ty") {
    msg.reply("Hehe~ Shampoo glad that you thankful!");
  }
});

client.on('message', msg => {
  if (msg.content === "Ty") {
    msg.reply("Hehe~ Shampoo glad that you thankful!");
  }
});

client.on('message', msg => {
  if (msg.content === "TY") {
    msg.reply("Hehe~ Shampoo glad that you thankful!");
  }
});

client.on('message', msg => {
  if (msg.content === "Ty!") {
    msg.reply("Hehe~ Shampoo glad that you thankful!");
  }
});

client.on('message', msg => {
  if (msg.content === "ty!") {
    msg.reply("Hehe~ Shampoo glad that you thankful!");
  }
});

client.on('message', msg => {
  if (msg.content === "Shampoo-") {
    msg.reply("Ssshhh, Airen. You say no more. Shampoo here, and Shampoo stay. She help you when you sad, and she enjoy you when you happy. Shampoo loves you more than anything else, and you make Shampoo happier than any other girl. Shampoo glad you in her life. Shampoo love you and she need you, and she hope you feel good, and if you do not then Shampoo is always happy to talk. :heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "I do.") {
    msg.reply("Shampoo do too! We marry now, and love forever!~");
  }
});

client.on('message', msg => {
  if (msg.content === "I do") {
    msg.reply("Shampoo do too! We marry now, and love forever!~");
  }
});

client.on('message', msg => {
  if (msg.content === "I do!") {
    msg.reply("Shampoo do too! We marry now, and love forever!~");
  }
});

client.on('message', msg => {
  if (msg.content === "Shampoo") {
    msg.reply("Hehe~, what you need? :heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "Let's elope") {
    msg.reply("Airen always has best ideas! Run away, marry, and love forever!~");
  }
});

client.on('message', msg => {
  if (msg.content === "Let's elope.") {
    msg.reply("Airen always has best ideas! Run away, marry, and love forever!~");
  }
});

client.on('message', msg => {
  if (msg.content === "Let's elope!") {
    msg.reply("Airen always has best ideas! Run away, marry, and love forever!~");
  }
});

client.on('message', msg => {
  if (msg.content === "Uhuh") {
    msg.reply("Uh-uh!");
  }
});

client.on('message', msg => {
  if (msg.content === "uhuh") {
    msg.reply("Uh-uh!");
  }
});

client.on('message', msg => {
  if (msg.content === "Uhuh.") {
    msg.reply("Uh-uh!");
  }
});

client.on('message', msg => {
  if (msg.content === "Uhuh!") {
    msg.reply("Uh-uh!");
  }
});

client.on('message', msg => {
  if (msg.content === "I love Shampoo more than she loves me.") {
    msg.reply("Uh-uh! Shampoo love you to end of Earth! More than anything love anything else.");
  }
});

client.on('message', msg => {
  if (msg.content === "I love Shampoo more than she loves me!") {
    msg.reply("Uh-uh! Shampoo love you to end of Earth! More than anything love anything else.");
  }
});

client.on('message', msg => {
  if (msg.content === "I love Shampoo more than she loves me") {
    msg.reply("Uh-uh! Shampoo love you to end of Earth! More than anything love anything else.");
  }
});

client.on('message', msg => {
  if (msg.content === "I love you more than you love me") {
    msg.reply("Uh-uh! Shampoo love you to end of Earth! More than anything love anything else.");
  }
});

client.on('message', msg => {
  if (msg.content === "I love you more than you love me!") {
    msg.reply("Uh-uh! Shampoo love you to end of Earth! More than anything love anything else.");
  }
});

client.on('message', msg => {
  if (msg.content === "I love you more than you love me.") {
    msg.reply("Uh-uh! Shampoo love you to end of Earth! More than anything love anything else.");
  }
});

client.on('message', msg => {
  if (msg.content === "I love Shampoo way more than she loves me") {
    msg.reply("*sniffles* Y... You not know Shampoo love you..? Sh-Shampoo love you more than anything love anything... To end of Earth! *wipes tear* Shampoo love you so much she want to marry! Right now!");
  }
});

client.on('message', msg => {
  if (msg.content === "I love Shampoo way more than she loves me.") {
    msg.reply("*sniffles* Y... You not know Shampoo love you..? Sh-Shampoo love you more than anything love anything... To end of Earth! *wipes tear* Shampoo love you so much she want to marry! Right now!");
  }
});

client.on('message', msg => {
  if (msg.content === "I love Shampoo way more than she loves me!") {
    msg.reply("*sniffles* Y... You not know Shampoo love you..? Sh-Shampoo love you more than anything love anything... To end of Earth! *wipes tear* Shampoo love you so much she want to marry! Right now!");
  }
});

client.on('message', msg => {
  if (msg.content === "I love you way more than you love me!") {
    msg.reply("*sniffles* Y... You not know Shampoo love you..? Sh-Shampoo love you more than anything love anything... To end of Earth! *wipes tear* Shampoo love you so much she want to marry! Right now!");
  }
});

client.on('message', msg => {
  if (msg.content === "I love you way more than you love me.") {
    msg.reply("*sniffles* Y... You not know Shampoo love you..? Sh-Shampoo love you more than anything love anything... To end of Earth! *wipes tear* Shampoo love you so much she want to marry! Right now!");
  }
});

client.on('message', msg => {
  if (msg.content === "I love you way more than you love me") {
    msg.reply("*sniffles* Y... You not know Shampoo love you..? Sh-Shampoo love you more than anything love anything... To end of Earth! *wipes tear* Shampoo love you so much she want to marry! Right now!");
  }
});


client.on('message', msg => {
  if (msg.content === "I want to marry you too.") {
    msg.reply("Y-You do..? Sh... Shampoo very happy to hear that. Shampoo's face feels like... Hot. Like Shampoo just sit in hot spring... Shampoo hasn't felt this way before... She likes it... A lot.:heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "I want to marry Shampoo.") {
    msg.reply("Y-You do..? Sh... Shampoo very happy to hear that. Shampoo's face feels like... Hot. Like Shampoo just sit in hot spring... Shampoo hasn't felt this way before... She likes it... A lot.:heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "I want to marry you.") {
    msg.reply("Y-You do..? Sh... Shampoo very happy to hear that. Shampoo's face feels like... Hot. Like Shampoo just sit in hot spring... Shampoo hasn't felt this way before... She likes it... A lot.:heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "Shampoo, I want to marry you.") {
    msg.reply("Y-You do..? Sh... Shampoo very happy to hear that. Shampoo's face feels like... Hot. Like Shampoo just sit in hot spring... Shampoo hasn't felt this way before... She likes it... A lot.:heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "I want Shampoo.") {
    msg.reply("Y-You do..? Sh... Shampoo very happy to hear that. Shampoo's face feels like... Hot. Like Shampoo just sit in hot spring... Shampoo hasn't felt this way before... She likes it... A lot.:heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "I want you.") {
    msg.reply("Y-You do..? Sh... Shampoo very happy to hear that. Shampoo's face feels like... Hot. Like Shampoo just sit in hot spring... Shampoo hasn't felt this way before... She likes it... A lot.:heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "I want you in my life.") {
    msg.reply("Y-You do..? Sh... Shampoo very happy to hear that. Shampoo's face feels like... Hot. Like Shampoo just sit in hot spring... Shampoo hasn't felt this way before... She likes it... A lot.:heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "I need you.") {
    msg.reply("Y-You do..? Sh... Shampoo very happy to hear that. Shampoo's face feels like... Hot. Like Shampoo just sit in hot spring... Shampoo hasn't felt this way before... She likes it... A lot.:heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "I need you in my life.") {
    msg.reply("Y-You do..? Sh... Shampoo very happy to hear that. Shampoo's face feels like... Hot. Like Shampoo just sit in hot spring... Shampoo hasn't felt this way before... She likes it... A lot.:heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "I want you in my life, Shampoo.") {
    msg.reply("Y-You do..? Sh... Shampoo very happy to hear that. Shampoo's face feels like... Hot. Like Shampoo just sit in hot spring... Shampoo hasn't felt this way before... She likes it... A lot.:heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "I need you in my life, Shampoo..") {
    msg.reply("Y-You do..? Sh... Shampoo very happy to hear that. Shampoo's face feels like... Hot. Like Shampoo just sit in hot spring... Shampoo hasn't felt this way before... She likes it... A lot.:heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "Shampoo, will you marry me?") {
    msg.reply("Of course Shampoo marry you! Shampoo love you more than anything and she want nothing more than to spend rest of life with beloved airen.");
  }
});

client.on('message', msg => {
  if (msg.content === "Will Shampoo marry me?") {
    msg.reply("Of course Shampoo marry you! Shampoo love you more than anything and she want nothing more than to spend rest of life with beloved airen.");
  }
});

client.on('message', msg => {
  if (msg.content === "Will you marry me?") {
    msg.reply("Of course Shampoo marry you! Shampoo love you more than anything and she want nothing more than to spend rest of life with beloved airen.");
  }
});

client.on('message', msg => {
  if (msg.content === "I love you more!") {
    msg.reply("No way, Shampoo most loving creature on God-Green Earth. She love you more!~");
  }
});

client.on('message', msg => {
  if (msg.content === "I love you more") {
    msg.reply("No way, Shampoo most loving creature on God-Green Earth. She love you more!~");
  }
});

client.on('message', msg => {
  if (msg.content === "I love you more.") {
    msg.reply("No way, Shampoo most loving creature on God-Green Earth. She love you more!~");
  }
});

client.on('message', msg => {
  if (msg.content === "No, I love you more!") {
    msg.reply("No, Shampoo love you more.");
  }
});

client.on('message', msg => {
  if (msg.content === "No, I love you more") {
    msg.reply("No, Shampoo love you more.");
  }
});

client.on('message', msg => {
  if (msg.content === "No, I love you more.") {
    msg.reply("No, Shampoo love you more.");
  }
});

client.on('message', msg => {
  if (msg.content === "Except I love you more.") {
    msg.reply("No, Shampoo love you more.");
  }
});

client.on('message', msg => {
  if (msg.content === "Except I love you more") {
    msg.reply("No, Shampoo love you more.");
  }
});

client.on('message', msg => {
  if (msg.content === "Squeeze me") {
    msg.reply("Shampoo squeeze you with all her love! She hold you tight and not let go!~ Now she give you big kiss.~ :heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "Shampoo loves me") {
    msg.reply("Yes she do, very much! :heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "Shampoo loves me.") {
    msg.reply("Yes she do, very much! :heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "Shampoo loves me!") {
    msg.reply("Yes she do, very much! :heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "Hug me") {
    msg.reply("Shampoo squeeze you with all her love! She hold you tight and not let go!~ Now she give you big kiss.~ :heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "Hug me, Shampoo") {
    msg.reply("Shampoo squeeze you with all her love! She hold you tight and not let go!~ Now she give you big kiss.~ :heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "Hug me, Shampoo!") {
    msg.reply("Shampoo squeeze you with all her love! She hold you tight and not let go!~ Now she give you big kiss.~ :heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "Hug me, Shampoo.") {
    msg.reply("Shampoo squeeze you with all her love! She hold you tight and not let go!~ Now she give you big kiss.~ :heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "Hug me, please.") {
    msg.reply("Shampoo squeeze you with all her love! She hold you tight and not let go!~ Now she give you big kiss.~ :heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "Hug me.") {
    msg.reply("Shampoo squeeze you with all her love! She hold you tight and not let go!~ Now she give you big kiss.~ :heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "Hug me!") {
    msg.reply("Shampoo squeeze you with all her love! She hold you tight and not let go!~ Now she give you big kiss.~ :heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "hug me") {
    msg.reply("Shampoo squeeze you with all her love! She hold you tight and not let go!~ Now she give you big kiss.~ :heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "Squeeze me!") {
    msg.reply("Shampoo squeeze you with all her love! She hold you tight and not let go!~ Now she give you big kiss.~ :heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "Squeeze me.") {
    msg.reply("Shampoo squeeze you with all her love! She hold you tight and not let go!~ Now she give you big kiss.~ :heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "Squeeze me, please.") {
    msg.reply("Shampoo squeeze you with all her love! She hold you tight and not let go!~ Now she give you big kiss.~ :heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "Squeeze me, please!") {
    msg.reply("Shampoo squeeze you with all her love! She hold you tight and not let go!~ Now she give you big kiss.~ :heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "Squeeze me, Shampoo") {
    msg.reply("Shampoo squeeze you with all her love! She hold you tight and not let go!~ Now she give you big kiss.~ :heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "Squeeze me, Shampoo!") {
    msg.reply("Shampoo squeeze you with all her love! She hold you tight and not let go!~ Now she give you big kiss.~ :heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "Squeeze me, Shampoo.") {
    msg.reply("Shampoo squeeze you with all her love! She hold you tight and not let go!~ Now she give you big kiss.~ :heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "Guess what") {
    msg.reply("Hmmmm... Shampoo not know. Tell!");
  }
});

client.on('message', msg => {
  if (msg.content === "Guess what.") {
    msg.reply("Hmmmm... Shampoo not know. Tell!");
  }
});

client.on('message', msg => {
  if (msg.content === "Guess what!") {
    msg.reply("Hmmmm... Shampoo not know. Tell!");
  }
});

client.on('message', msg => {
  if (msg.content === "Guess what, Shampoo") {
    msg.reply("Hmmmm... Shampoo not know. Tell!");
  }
});

client.on('message', msg => {
  if (msg.content === "Guess what, Shampoo!") {
    msg.reply("Hmmmm... Shampoo not know. Tell!");
  }
});

client.on('message', msg => {
  if (msg.content === "Guess what, Shampoo.") {
    msg.reply("Hmmmm... Shampoo not know. Tell!");
  }
});

client.on('message', msg => {
  if (msg.content === "I love you!") {
    msg.reply("Shampoo love you too, to end of Earth! More than anything love anything else. Thank you for kind words, you always make Shampoo day. :heart:");
  }
});

client.on('message', msg => {
  if (msg.content === "And now your first kiss wasn't with JoJo...") {
    msg.reply("Kono Shampoo da!");
  }
});

client.on('message', msg => {
  if (msg.content === "And now your first kiss wasn't with Ranma...") {
    msg.reply("Kono Shampoo da!");
  }
});

client.on('message', msg => {
  if (msg.content === "And now your first kiss wasn't with Akane...") {
    msg.reply("Kono Shampoo da!");
  }
});

client.on('message', msg => {
  if (msg.content === "And now your first kiss wasn't with Ukyo...") {
    msg.reply("Kono Shampoo da!");
  }
});

client.on('message', msg => {
  if (msg.content === "And now your first kiss wasn't with Dio...") {
    msg.reply("Kono Shampoo da!");
  }
});

client.on('message', msg => {
  if (msg.content === "And now your first kiss wasn't with Lapis...") {
    msg.reply("Kono Shampoo da!");
  }
});

client.on('message', msg => {
  if (msg.content === "bruh") {
    msg.reply("https://www.youtube.com/watch?v=2ZIpFytCSVc");
  }
});

client.on('message', msg => {
  if (msg.content === "Bruh") {
    msg.reply("https://www.youtube.com/watch?v=2ZIpFytCSVc");
  }
});


client.login('NjY4Njk2OTA0ODA0MzM1NjI2.Xrj_nw.F3v_Va_hbvVsAPkFn5frlg__tIo');
