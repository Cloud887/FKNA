require('dotenv').config();

const superagent = require('superagent');
const Koa = require('koa');
const app = new Koa();
const PORT = process.env.PORT;

app.use(async (ctx, next) => {
  console.log('REQUEST HERE', ctx.request, 'RESPONSE HERE', ctx.response);
});

app.on('error', err => {
  log.error('server error', err);
});

app.listen(PORT);
