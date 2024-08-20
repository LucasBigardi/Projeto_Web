const express = require('express');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars')

//Conexão Banco de dados mySQL
const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', 'Ta323287!', {
    host: 'localhost',
    dialect: 'mysql'
})


//template Engine
// app.engine('handlebars', handlebars({defaultLayout: 'main'}))
// app.set('view engine', 'handlebars')


app.use(express.static('./Paginas'));

app.get('/hello', (req, res) => {
    res.send('Hello, World! 123');
});

app.listen(port, ()=> {
    console.log(`Server running at http://localhost:${port}`);
});

