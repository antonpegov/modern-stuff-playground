import app from './app';

const port = process.env.PORT || '8000';

const server = app.listen(port, () => {
  console.log(`Server started on port ${port}`);
  app.start().then(() => {
    app.use(ctx => ctx.body = 'Koa waiting for your comands...');
  });
});

export default server;
