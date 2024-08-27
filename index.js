const express = require('express');
const app = express();
const port = 3000;
const {engine} = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
const Post = require('./models/Post');
const { error } = require('console');


//Body-Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Middleware para análise de dados de formulários
app.use(express.urlencoded({ extended: true }));

// Middleware para análise de dados JSON
app.use(express.json());

//template Engine
app.engine('handlebars', engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


app.use(express.static(path.join(__dirname,"publica")))

//Rotas

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/cadastro', function(req, res){
    res.render('cadastro');
});

app.get('/usuarios', function(req, res){
    res.render('usuarios');
});

app.get('/principal', function(req, res){
    res.render('principal');
});

app.post('/entrou', function(req, res){
    Post.create({
         email: req.body.email,
         senha: req.body.senha
    }).then(function(){
        res.send("Usuario Criado")
    }).catch(function(){
        res.send("Houve um erro.")
    })
})

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