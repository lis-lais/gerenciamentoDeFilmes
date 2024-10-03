const prompt = require('prompt-sync')();

function mostrarMenuBuscarFilme() {
    console.log(`
        --------Opção de Busca--------
        1. Por Título
        2. Por Diretor
        3. Por Ano
        4. Por Gênero
        5. Voltar
    `);
};

function menuOptionsBuscarFilme(opcao, filmes) {
    let resultado = [];
    switch (opcao.trim()) {
        case '1':
            const titulo = prompt('Digite o titulo do filme: ').trim();
            resultado = filmes.filter((filme) => filme.titulo.toLowerCase().includes(titulo.toLowerCase()));
            break;
        case '2':
            const diretor = prompt('Digite o diretor do filme: ').trim();
            resultado = filmes.filter((filme) => filme.diretor === diretor);
            break;
        case '3':
            const ano = prompt('Digite o ano do filme: ').trim();
            resultado = filmes.filter((filme) => filme.ano === ano);
            break;
        case '4':
            const genero = prompt('Digite o gênero do filme: ').trim();
            resultado = filmes.filter((filme) => filme.genero === genero);
            break;
        case '5':
            return;
        default:
            console.log('Opção inválida!');
            mostrarMenuBuscarFilme();  
    }
    return resultado;
};

module.exports = { mostrarMenuBuscarFilme, menuOptionsBuscarFilme };