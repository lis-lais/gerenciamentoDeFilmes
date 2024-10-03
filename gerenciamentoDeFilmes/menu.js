const prompt = require('prompt-sync')();
const { adicionarFilme, listarFilmes, atualizarFilme, excluirFilme, buscarFilme } = require('./cadastrarFilme.js');

function mostrarMenu() {
    console.log(`
        --------Menu--------
        1. Adicionar Filme
        2. Listar Filmes
        3. Atualizar Filme
        4. Excluir Filme
        5. Buscar Filme
        6. Sair
    `);
};

function menuOptions(opcao) {
    switch (opcao.trim()) {
        case '1':
            adicionarFilme();
            break;
        case '2':
            listarFilmes();
            break;
        case '3':
            atualizarFilme();
            break;
        case '4':
            excluirFilme();
            break;
        case '5':
            buscarFilme();
            break;
        case '6':
            console.log('Saindo...');
            process.exit();
        default:
            console.log('Opção inválida!');
            mostrarMenu();
    }
};

function menuLoop() {
    while (true) {
        mostrarMenu();
        const opcao = prompt('Digite a opção desejada: ').trim();
        menuOptions(opcao);
    }
};

module.exports = {mostrarMenu, menuOptions, menuLoop};