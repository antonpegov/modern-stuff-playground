import app from './app';
import inits from './inits';
import middlewares from './middlewares';
import modules from './modules';
import helloKoa from './middlewares/helpers/hello-koa';

const port = process.env.PORT || '8000';

const server = app.listen(port, () => {  
  console.log(`Server started on port ${port}`);
  app.start(server, inits, middlewares, modules).then(() => {
    // Attach custom middlewares here:
    app.use(helloKoa);
  });
});

export default server;
