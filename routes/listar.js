const listaFilmes = require("../methods/listaFilmes.js")

module.exports = app => {
    app.get("/lista",(req,res) => {
        const listagem = listaFilmes
        res.send(listagem)
    })
}

