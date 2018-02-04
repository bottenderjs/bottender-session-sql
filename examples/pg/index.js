const { ConsoleBot } = require('bottender');

const SQLSessionStore = require('../../src');

const knexfile = require('./knexfile');

const bot = new ConsoleBot({
  sessionStore: new SQLSessionStore(knexfile),
});

bot.onEvent(async context => {
  await context.sendText('Hello World');
  context.setState({ count: (context.state.count || 0) + 1 });
});

bot.createRuntime();
