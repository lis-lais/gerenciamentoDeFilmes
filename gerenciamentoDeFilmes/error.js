const prompt = require('prompt-sync')();

function mensagemError(filmes) {
    const id = prompt('Insira o id do filme: ');
    let index = -1;

    for (let i = 0; i < filmes.length; i++) {
        if (filmes[i].id.toString() === id.trim()) {
            index = i;
            break;
        }
    }

    if (index === -1) {
        console.log('Filme não encontrado.');
    }
    return index;
};

module.exports = { mensagemError };