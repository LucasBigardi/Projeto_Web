const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', 'Ta323287!', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log("deu certo")
}).catch(function(erro){
    console.log("deu errado"+erro)
})