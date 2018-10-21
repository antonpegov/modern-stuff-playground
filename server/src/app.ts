import * as Koa from 'koa';
import inits from './inits';
import middlewares from './middlewares';
import { Server } from 'http';
// import modules from './modules';

interface App extends Koa {
  start: (server) => Promise<void>;
}

const app = <App>new Koa();
app.start = async (server: Server) => {
  await inits(server);
  middlewares(app);
  // app.use(modules);
}

export default app;