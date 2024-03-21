const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL);
} else {
  sequelize = new Sequelize(
    process.env.PG_NAME,
    process.env.PG_USER,
    process.env.PG_PW,
    {
      host: 'localhost',
      dialect: 'postgres',
    }
  );
}

module.exports = sequelize;
