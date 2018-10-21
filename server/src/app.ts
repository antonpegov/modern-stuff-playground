import * as Koa from 'koa';
import inits from './inits';
import middlewares from './middlewares';
// import modules from './modules';

interface App extends Koa {
  start: () => Promise<void>;
}

const app = <App> new Koa();

// app.start = async () => {
//   await inits();
//   middlewares(app);
//   // app.use(modules);
// };

export default app;
