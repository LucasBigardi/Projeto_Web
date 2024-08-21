const db = require('./db')

const Post = db.sequelize.define('usuario',{
    email: {
        type: db.Sequelize.STRING
    },
    senha: {
        type: db.Sequelize.STRING
    }
})

// Post.sync({FORCE: true})

module.exports = Post