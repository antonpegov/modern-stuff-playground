import * as Koa from 'koa';
import * as logger from 'koa-logger';

export default (app: Koa) => {
  app.use(logger());
};
