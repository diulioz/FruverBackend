import { Sequelize } from "sequelize";

const sequelize = new Sequelize('fruvertaller', 'root', '', {
    host: 'localhost',
    dialect: 'mysql', 
});

export {
    sequelize
}