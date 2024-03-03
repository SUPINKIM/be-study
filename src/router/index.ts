import { Context } from 'koa';
import Router from 'koa-router';
import { user_router } from './user';

export const router = new Router();

router.get('/', (ctx: Context) => {
    ctx.body = '홈';
});
