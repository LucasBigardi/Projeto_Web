const express = require('express');
const app = express();
const port = 3000;
const {engine} = require('express-handlebars')

//Conexão Banco de dados mySQL
const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', 'Ta323287!', {
    host: 'localhost',
    dialect: 'mysql'
})


//template Engine
app.engine('handlebars', engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


app.use(express.static('./views/layouts'));

app.get('/login', (req, res) => {
    res.render('login');
});

app.listen(port, ()=> {
    console.log(`Server running at http://localhost:${port}`);
});


{/* <script>
function validarLogin() {
    console.log('chamou validarLogin');

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    document.getElementById('campoObrigatorio').style.display = 'none';
    document.getElementById('senhaTamanho').style.display = 'none';

    if (!email || !senha) {
        console.log("Campos Vazios");
        document.getElementById('campoObrigatorio').style.display = 'block';
        return;
    }

    if (senha && (senha.length < 8 || senha.length > 16)) {
        console.log("Tamanho senha inválido");
        document.getElementById('senhaTamanho').style.display = 'block';
        return;
    }

    console.log('email: ' + email);
    console.log('senha: ' + senha);
}

function validarPadraoSenha(event) {
    console.log(event.target.value);
    const value = event.target.value;

    document.getElementById('senhaPadrao').style.display = 'none';

    if (!value.match(/[A-Z]/g)) {
        console.log('Caracteres Maisculo')
        document.getElementById('senhaPadrao').style.display = 'block';                
    } 

    if (!value.match(/[^A-Za-z 0-9]/g)) {
        console.log('Caracteres Normais')
        document.getElementById('senhaPadrao').style.display = 'block';                
    }
                 
}

</script> */}