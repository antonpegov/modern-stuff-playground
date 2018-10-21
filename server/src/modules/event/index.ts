import * as Router from 'koa-router';
import controller from './controller';

const router = new Router({ prefix: '/event' });

router
    .post('/add', controller.add)
    .post('/del', controller.del)
    .post('/find', controller.find)
    .post('/edit', controller.edit)
    .get('/all', controller.all)
    .get('/mocked', controller.mocked)
;

export default router.routes();
