import * as Koa from 'koa';
import * as fs from 'fs';

export default (app: Koa) => {
  process.stdout.write('Middleware...');
  const stack = fs.readdirSync(__dirname + '/stack').filter((name) => name.slice(-3) === '.ts').sort();
  stack.forEach((file) => {
    require('./stack/' + file).default(app);
    process.stdout.write('.');
  });
  console.log('done');
};
