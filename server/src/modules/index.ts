import * as Router from 'koa-router';
import event from './event';

const router = new Router({ prefix: '/api' });

router
    .use(event);

export default router.routes();
