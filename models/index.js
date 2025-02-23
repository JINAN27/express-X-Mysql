const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.json').development;

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.CarBrand = require('./carBrand')(sequelize, DataTypes);
db.MotorBrand = require('./motorBrand')(sequelize, DataTypes);

module.exports = db;
