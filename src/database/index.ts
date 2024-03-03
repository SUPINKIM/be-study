import { Sequelize } from 'sequelize';
import { config } from '@/config';

export const sequelize = new Sequelize(
    config.db_name,
    config.user_name,
    config.password,
    {
        host: config.host,
        dialect: 'mysql',
        define: {
            freezeTableName: true, // the table name to be equal to the model name defined globally
        },
    },
);
