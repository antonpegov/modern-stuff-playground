import * as Koa from 'koa';
import { Server } from 'http';

interface App extends Koa {
  start: (server: Server, inits: Function, middlewares: Function, modules: Koa.Middleware) => Promise<void>;
}

const app = <App>new Koa();
app.start = async (server: Server, inits: Function, middlewares: Function, modules: Koa.Middleware) => {
  await inits(server);
  middlewares(app);
  app.use(modules);
}

export default app;