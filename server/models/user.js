import { Sequelize, DataTypes } from 'sequelize';
import { config } from "dotenv";

config();

const DB_URL = process.env.DB_URL;

const sequelize = new Sequelize(DB_URL);

const User = sequelize.define('User', {
    user_name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "user",
    timestamps: false,
    underscored: true
})

sequelize.sync();

export default User;