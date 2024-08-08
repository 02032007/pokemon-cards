/*
Objetivo 1 - Quando o usuario clickar na seta avançar ir para a proxima carta

Passo 1 - Pegar o elemento HTML da seta avançar

Passo 2 - Dar um jeito quando o usuario clickar nele

Passo 3 - Mudar para a proxima carta da lista

Passo 4 - Esconder a carta que estava selecionada

Objetivo 2 - Quando o usuario clickar na seta voltar ir para a carta anterior

Passo 1 - Pegar o elemento HTML da seta voltar

Passo 2 - Dar um jeito quando o usuario clickar nele

Passo 3 - Mudar para a carta anterior na lista

Passo 4 - Esconder a carta que estava selecionada

*/

// Passo 1 - Pegar o elemento HTML da seta avançar

const btnAvancar = document.getElementById("seta-avancar");
const btnVoltar = document.getElementById("seta-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function esconderCartSelecionada() {
  const cartaoSelecionada = document.querySelector(".selecionada");
  cartaoSelecionada.classList.remove("selecionada");
}

function mostrarCartSelecionada() {
  cartoes[cartaoAtual].classList.add("selecionada");
}

btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) {
    return;
  }
  esconderCartSelecionada();

  cartaoAtual++;

  mostrarCartSelecionada();
});

btnVoltar.addEventListener("click", function () {
  if (cartaoAtual <= 0) {
    return;
  }
  esconderCartSelecionada();

  cartaoAtual--;

  mostrarCartSelecionada();
});
// quando chegar no final apagar a seta, opcional
