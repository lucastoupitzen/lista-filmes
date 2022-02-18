const arquivoFilmes = require("../listaFilmes.json")

let lista = [0]

for(var i = 0; i < arquivoFilmes.length; i++){
    lista.push(arquivoFilmes[i].filme)
}

module.exports = lista

//teste do git