import Koa, { Context } from 'koa';

import { sequelize } from './database';
import { user_router } from './router/user';
import { router } from './router';

const app = new Koa();

app.use(router.routes()).use(router.allowedMethods());
app.use(user_router.routes()).use(user_router.allowedMethods());

app.listen(4000, async () => {
    await sequelize
        .authenticate()
        .then(async () => {
            console.log('connect to mysql db');
            await sequelize.sync();
        })
        .catch((e) => console.error(e));

    console.log('listening to port 4000');
});
