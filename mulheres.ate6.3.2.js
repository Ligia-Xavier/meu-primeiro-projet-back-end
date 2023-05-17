const express = require("express") //aqui estou iniciando o express
const router = express.Router() //aqui estou configurando a primeira parte da rota
const { v4: uuidv4 } = require('uuid')

const app = express() //aqui estou iniciando o app
app.use(express.json())
const porta = 3333 // aqui estou criando a porta

//aqui estou criando lista inicial de mulheres
const mulheres = [
    {
    id: "1",
    nome: "Ligia Xavier",
    imagem: "https://media.licdn.com/dms/image/C5603AQFni1DHiiIH_A/profile-displayphoto-shrink_800_800/0/1517658718073?e=1689206400&v=beta&t=386GaG1YxBf2Da0PM3JmEHQsXbXCOB0WEIy5vHdbNFo",
    minibio: "Linguista e Cientista de Dados"
    },
    {
    id: "2",
    nome: "Iana Chan",
    imagem: "https://bit.ly/3JCXBqP",
    minibio: "Fundadora da Programaria"    
    },
    {
    id: "3",
    nome: "Nina da Hora",
    imagem: "https://bit.ly/3FKpFaz",
    minibio: "Hacker antirracista"
    }
]

//GET
function mostraMulheres(request, response) {
    response.json(mulheres)
}

//POST
function criaMulher(request, response) {
    const novaMulher = {
        id: uuidv4(),
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio
    }

    mulheres.push(novaMulher)

    response.json(mulheres)

}

//PATCH
function corrigeMulher(request, response) {
    function encontraMulher(mulher) {
        if(mulher.id === request.params.id) {
            return mulher
        }
    }
    const mulherEncontrada = mulheres.find(encontraMulher)

    if (request.body.nome) {
        mulherEncontrada.nome = request.body.nome
    }

    if (request.body.imagem) {
        mulherEncontrada.imagem = request.body.imagem
    }

    if (request.body.minibio) {
        mulherEncontrada.minibio = request.body.minibio
    }

    response.json(mulheres)
}

app.use(router.get("/mulheres", mostraMulheres)) //configurei rota GET /mulheres
app.use(router.post("/mulheres", criaMulher)) //configurei rota POST /mulheres
app.use(router.patch("/mulheres/:id", corrigeMulher)) //configurei rota PATCH /mulheres/:id

//PORTA
function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.listen(porta, mostraPorta) //servidor ouvindo a porta