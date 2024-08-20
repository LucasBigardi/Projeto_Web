const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', 'Ta323287!', {
    host: 'localhost',
    dialect: 'mysql'
})

const Postagem = sequelize.define('Postagem', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

Postagem.create({
    titulo: 'Harry Potter e a Pika de ferro',
    conteudo: 'jogando magina com a pika foda'
})

const Usuario = sequelize.define('Usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

Usuario.create({
    nome:'Lucas',
    sobrenome:'Bigardi',
    idade:'23',
    email:'lucas.bigardi@hotmail.com'
})

// Usuario.sync({force: true})