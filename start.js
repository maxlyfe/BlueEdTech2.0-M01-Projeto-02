var prompt = require('prompt-sync')();

let play = false;
let round = 0;
let resposta = '';
let player = '';
let ia = '';
let pontosPlayer = 0;
let pontosIa = 0;
const posibilidades = ['Pedra', 'Papel', 'Tessoura'];


// Inicia a repetiçaõ do jogo.
while (play !== true) {

  // Introdução ao jogo
  console.clear();
  console.log('O Jokenpô é o popular jogo do "pedra, papel e tesoura".');
  console.log('A premissa é simples, você tem 3 elementos para escolher');
  console.log('e cada um deles vence de um, e perde para o outro.');
  console.log('Pedra ganha da tesoura, mas perde para o papel');
  console.log('Tesoura ganha do papel, mas perde para a pedra');
  console.log('Papel ganha da pedra, mas perde para a tesoura');
  console.log();
  console.log();
  prompt('Precione "Enter" para continuar.')
  console.clear();


  // Define quantas rodadas o jogador quer jogar.
  console.log('Quantas rondas deseja disputar?');
  round = +prompt('');
  console.clear();

  // Inicia a repetição de jogadas definidas pelo jogador.
  for (let i = 1; i <= round; i++) {

    // Recebe a escolha do jogador.
    console.log('♪♪♪ Pedra, Papel ou Tessoura ♪♪♪')
    console.log();
    console.log('Faça a sua escolha')
    player = prompt('').toLowerCase();
    console.clear();

    // Se o jogador fez uma jogada valida a IA faz a sua escolha, caso contrario repete a escolha do jogador.
    if (player === 'pedra' || player === 'papel' || player === 'tessoura') {
      let possibilidad = posibilidades[Math.floor(Math.random() * posibilidades.length)];
      ia = possibilidad.toLowerCase();

      // Definição de vitoria e ou empate para cada rodada.
      if (player == 'papel' && ia == 'pedra') {
        pontosPlayer++
      } else if (player == 'papel' && ia == 'tessoura') {
        pontosIa++
      } else if (player == 'pedra' && ia == 'tessoura') {
        pontosPlayer++
      } else if (player == 'pedra' && ia == 'papel') {
        pontosIa++
      } else if (player == 'tessoura' && ia == 'papel') {
        pontosPlayer++
      } else if (player == 'tessoura' && ia == 'pedra') {
        pontosIa++
      } else if (player == ia) {
        console.log('Foi empate, ninguem soma pontos.');
      };

      // Informação da partida exibida no console.
      console.log();
      console.log(`Sua escolha foi ${player}`);
      console.log();
      console.log(`A escolha da IA foi ${ia}`);
      console.log();
      console.log(`Placar: Player ${pontosPlayer} x ${pontosIa} Ia`);
      prompt('Precione "Enter" para continuar.')
      console.clear();
    } else {
      console.log('Sua escolha não foi correta, por favor tente novamente.');
      i--
    };

    // Comparação de valores e definição de vencedor.
    if (i === round) {
      if (pontosPlayer > pontosIa) {
        console.clear();
        console.log('Parabens você venceu!!!');
        console.log();
        console.log('O placar foi de');
        console.log(`Você ${pontosPlayer} pontos X ${pontosIa} pontos da Ia.`);
        console.log();
        console.log();
        console.log();
        prompt('Precione "Enter" para continuar.')
        console.clear();
      } else if (pontosPlayer < pontosIa) {
        console.clear();
        console.log('Poxa você perdeu =(');
        console.log();
        console.log('O placar foi de');
        console.log(`Você ${pontosPlayer} pontos X ${pontosIa} pontos da Ia.`);
        console.log();
        console.log();
        console.log();
        prompt('Precione "Enter" para continuar.')
        console.clear();
      } else if (pontosPlayer == pontosIa) {
        console.clear();
        console.log('Nossa deu empate');
        console.log();
        console.log('O placar foi de');
        console.log(`Você ${pontosPlayer} pontos X ${pontosIa} pontos da Ia.`);
        console.log();
        console.log();
        console.log('Tenta mais uma vez.');
        prompt('Precione "Enter" para continuar.')
        console.clear();
      };
    };


    // Ao finalizar as rodadas o programa verifica se o jogador quer continuar jogando, caso a resposta for diferente a 'sim' ele finaliza.
    if (i === round) {
      console.log('Deseja continuar jogando?');
      console.log();
      console.log();
      console.log('Digite "Sim" para continuar ou "Não" para finalizar o jogo.');
      resposta = prompt('').toLowerCase();
      console.clear();
    };
  };

  // Se o jogador desejar continuar jogando o console será limpo para iniciar uma nova partida.
  if (resposta === 'sim') {
    console.clear();
    pontosIa = 0;
    pontosPlayer = 0;
  };

  // Transforma a variavel play em true para sair da repetição e finalizar o jogo.
  if (resposta !== 'sim') {
    play = true;
  };
};


console.clear();
console.log('acabou.');