import app from './app';
import helloKoa from './middlewares/helpers/hello-koa';

const port = process.env.PORT || '8000';

const server = app.listen(port, () => {
  console.log(`Server started on port ${port}`);
  app.start().then(() => {
    app.use(helloKoa);
  });
});

export default server;
