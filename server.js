require('dotenv').config();

const superagent = require('superagent');
const Koa = require('koa');
const app = new Koa();
const PORT = process.env.PORT;
const AMAZON_API_SERVER = process.env.AMAZON_API_URL;

app.use(async (ctx, next) => {
  console.log('REQUEST HERE', ctx.request, 'RESPONSE HERE', ctx.response);
});

// TWo GETs that will handle the API for Amazon for prices of (START with the LIGHTBULBS)
// The second API will get specifications for those types of items if the specs for those things are not already found in the
// Amazon API for prices (I dont know what the shopping AMAZON API has yet.)

superagent.get(AMAZON_API_URL);

app.on('error', err => {
  log.error('server error', err);
});

app.listen(PORT);
