import {
    Model,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
} from 'sequelize';
import { sequelize } from '..';

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare uuid: number;
    declare id: string;
    declare password: string;
    declare user_name: string;
    declare user_phone: string | null;
}

User.init(
    {
        uuid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_name: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        user_phone: {
            type: new DataTypes.STRING(20),
        },
    },
    {
        sequelize,
        modelName: 'User',
        timestamps: true,
        createdAt: true,
        updatedAt: 'updateTimestamp',
    },
);

export default User;
