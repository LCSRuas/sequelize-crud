const Sequelize = require('sequelize');
const sequelize = new Sequelize('crudperson', 'root', '2@xxYYxx@2', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;