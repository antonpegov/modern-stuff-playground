import * as favicon from 'koa-favicon';
import * as path from 'path';
import { DIRS } from '../../configuration';

export default (app) => {
  const favFile = path.join(DIRS.public, 'favicon.png');
  app.use(favicon(favFile));
};
