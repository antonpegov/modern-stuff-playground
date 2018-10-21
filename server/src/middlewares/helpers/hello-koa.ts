import * as Koa from 'koa';

const helloKoa: Koa.Middleware = (ctx: Koa.Context, next: Koa.Middleware) => {
  ctx.body = "Hello Koa!";
}

export default helloKoa;