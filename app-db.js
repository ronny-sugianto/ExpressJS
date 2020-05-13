import Sequlize from 'sequelize';
import dotenv from 'dotenv';


const conn = new Sequlize(
    "gomux",
    "root",
    "postgres", {
    dialect: "postgres",
    host: "127.0.0.1",
    port: "5432"
}
);

module.exports = conn;