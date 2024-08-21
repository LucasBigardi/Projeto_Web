const Sequelize = require('sequelize')
//Conexão Banco de dados mySQL
const sequelize = new Sequelize('usuario', 'root', 'Ta323287!', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}