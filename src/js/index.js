/*
OBJETIVO - quando clicarmos no botão temos que mostar a imagem de fundo correspondente
Passo 1 - pegar o elemento HTML dos botões
Passo 2 - identificar o clique do usuário no botão
Passo 3 - desmarcar o botão selecionado anterior
Passo 4 - marcar o próximo botão clicado como se estivesse selecionado
Passo 5 - esconder a imagem ativa de fundo anterior
Passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
*/


const botoesCarrossel = document.querySelectorAll('.botao');

const imagens = document.querySelectorAll('.imagem');

botoesCarrossel.forEach((botao, indice) => {

    botao.addEventListener('click', () => {

        desativarBotaoSelecionado();

        selecionarBotaoCarrossel(botao);

        esconderImagemAtiva();

        mostrarImagemDeFundo(indice);
    })

})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}


/*
Passo 1 - pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');

Pegar a lista de imagens
const imagens = document.querySelectorAll('.imagem');

Passo 2 - identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {

    botao.addEventListener('click', () => {

        Passo 3 - desmarcar o botão selecionado anterior
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        Passo 4 - marcar o próximo botão clicado como se estivesse selecionado
        botao.classList.add('selecionado');

        Passo 5 - esconder a imagem ativa de fundo anterior
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        Passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
        imagens[indice].classList.add('ativa');
    })

})
*/
