const prompt = require('prompt-sync')();
const { mostrarMenuBuscarFilme, menuOptionsBuscarFilme } = require('./menuBuscar.js');
const { mensagemError } = require('./error.js');

let filmes = [];

function novoFilme(callbacks) {
    const titulo = prompt('Título: ');
    const diretor = prompt('Diretor: ');
    const ano = prompt('Ano: ');
    const genero = prompt('Gênero: ');

    const filme = {
        id: Date.now(),
        titulo: titulo.trim(),
        diretor: diretor.trim(),
        ano: ano.trim(),
        genero: genero.trim(),
    };

    callbacks(filme);
};

function adicionarFilme() {
    novoFilme((filme) => {
        let existe = false;
        for (let i = 0; i < filmes.length; i++) {
            if (filmes[i].titulo === filme.titulo && filmes[i].diretor === filme.diretor) {
                existe = true;
                break;
            }
        }
        if (existe) {
            console.log('Este filme já está cadastrado!');
        } else {
            filmes.push(filme);
            console.log('Filme adicionado com sucesso!');
        }  
    });
};

function listarFilmes() {
    if (filmes.length === 0) {
        console.log('Nenhum filme cadastrado!');
        return;
    }

    console.log('Filmes Cadastrados:');
    console.log(filmes);
};

function atualizarFilme() { 
    
    listarFilmes();

    const index = mensagemError(filmes);
  
    if (index === -1) {
        return;
    }

    const filme = filmes[index];

    const novoTitulo = prompt(`Título (atual: ${filme.titulo}) `);
    const novoDiretor = prompt(`Diretor (atual: ${filme.diretor}) `);
    const novoAno = prompt(`Ano (atual: ${filme.ano}) `);
    const novoGenero = prompt(`Gênero (atual: ${filme.genero})`);

    filmes[index] = {
        id: filme.id,
        titulo: novoTitulo.trim() || filme.titulo,
        diretor: novoDiretor.trim() || filme.diretor,
        ano: parseInt(novoAno. trim()) || filme.ano,
        genero: novoGenero.trim() || filme.genero,
    };

    console.log('Filme atualizado com sucesso!');

};

function excluirFilme() {
    listarFilmes();

    const index = mensagemError(filmes); 

    if (index !== undefined) { // Verifica se um índice foi retornado
        filmes.splice(index, 1);
        console.log('Filme excluído com sucesso!');
    }
};

function buscarFilme() {
    listarFilmes();
    mostrarMenuBuscarFilme();

    const opcao = prompt('Digite a opção desejada: ').trim();
    
    if (opcao === null || opcao === '') { // Tratamento para entrada vazia ou cancelada
        console.log('Busca cancelada ou entrada inválida.');
        return;
    }

    const resultados = menuOptionsBuscarFilme(opcao, filmes);

    console.log(' Filmes encontrados: ');
    if (resultados.length > 0) {
        resultados.forEach((filme, index) => {
            console.log(`${index + 1}. Título:  ${filme.titulo} - Diretor: ${filme.diretor} - Ano: ${filme.ano} - Gênero: ${filme.genero}`);
        });
    } else {
        console.log('Nenhum filme encontrado.');
    }
}

module.exports = { 
    adicionarFilme, listarFilmes, atualizarFilme, excluirFilme, buscarFilme 
};