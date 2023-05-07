const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
response.json({
    nome: "Ligia Xavier",
    imagem: "https://github.com/simaraconceicao.png",
    minibio: "Linguista e Cientista de Dados"
 })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/mulher", mostraMulher))
app.listen(porta, mostraPorta)