//Declarando variáveis globais
let listaDeNumeros = [];
let numeroLimite = 3;
let tentativas = 1;
let numeroSecreto = gerarNum();

//Declarando funções
function exibirTexto(tag, texto) {
    let campoAlteravel = document.querySelector(tag);
    campoAlteravel.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function gerarNum() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementos = listaDeNumeros.length;
    if (quantidadeDeElementos == numeroLimite) {
        listaDeNumeros = [];
    }
    if (listaDeNumeros.includes(numeroEscolhido)) {
        return gerarNum();
    } else {
        listaDeNumeros.push(numeroEscolhido);
        console.log(listaDeNumeros);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let textoVitoria = `O número secreto é ${numeroSecreto} e você acertou com ${tentativas} ${palavraTentativas}`;
        exibirTexto('h1', 'Você acertou!');
        exibirTexto('p', textoVitoria);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute < numeroSecreto) {
            exibirTexto('p', 'O número é maior');
            tentativas++;
            limparCampo();
        } else {
            exibirTexto('p', 'O número é menor');
            tentativas++;
            limparCampo();
        }
    }
}

function reiniciarJogo() {
    numeroSecreto = gerarNum();
    limparCampo();
    tentativas = 1;
    textosIniciais();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function textosIniciais() {
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', 'Escolha um número entre 1 a 10');
}
//Chamada de funções

textosIniciais();

