const Sequelize = require("sequelize");
require('dotenv').config();
const db = new Sequelize('UCWeb', null, null, {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
});

// const devConfig = {
//   database: process.env.PG_DATABASE,
//   user: process.env.PG_USER,
//   password: process.env.PG_PASSWORD,
//   host: process.env.PG_HOST,
//   dialect: "postgres",
//   logging: false,
// };

// const db = new Sequelize(devConfig);

// const db = new Sequelize(
//   process.env.PG_DATABASE,
//   process.env.PG_USER,
//   process.env.PG_PASSWORD,
//   {
//     host: process.env.PG_HOST,
//     dialect: process.env.PG_DIALECT,
//     logging: false,
//   }
// );

module.exports = db;

