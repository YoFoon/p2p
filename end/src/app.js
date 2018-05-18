const Koa = require('koa')
const router=require('koa-router')()
const cors = require('koa-cors')
const logger = require('koa-logger')
const json = require('koa-json')
const path = require('path')
const route = require('./router/index')
const koaBody = require('koa-body');

const app = new Koa();

app.use(koaBody());
app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());
const rootDir = path.resolve(__dirname, '../');
app.use(require('koa-static')(rootDir + '/html'))

// logger
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

//跨域
app.use(cors());

//router
route(router);
app.use(router.routes());

app.listen(8008);