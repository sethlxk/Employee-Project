import { Sequelize } from 'sequelize';
export const sequelize = (): Sequelize => {
    return new Sequelize({
        username: "postgres",
        password: "goonerforlife",
        database: "employee_db",
        host: "127.0.0.1",
        dialect: "postgres"
    });
};