import { Context } from 'koa';
// import { router } from '..';

import Router from 'koa-router';
import User from '@/database/user';

export const user_router = new Router();

user_router.post('/user', async (ctx: Context) => {
    // test
    ctx.body = '유저!';
    await User.create({ id: 'sooki', password: '1234!', user_name: '수빈' });
    console.log('sooki was saved to the database!');
});
