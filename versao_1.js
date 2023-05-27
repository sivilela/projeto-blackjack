/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
// Mantém a mensagem de boas vindas, mesmo se a opção do usuário for cancelar e o jogo acabar?
// Não há necessidade de criar uma variável para imprimir uma mensagem. Excluír do código
// let msgBoasVindas = ("Boas vindas ao jogo de BlackJack!")
// console.log(msgBoasVindas)

console.log("Boas vindas ao jogo de BlackJack!");

if(confirm("Quer iniciar uma nova rodada?")) { 
// variáveis usuário e computador não utilizadas, excluír do código
//const usuario = (`X`)
//const computador = (`PC`)
// Sorteia carta para os jogadores chamando a função comprarCarta() do arquivo naoMexer.js
const carta1DoUsuário = comprarCarta()
const carta2DoUsuário = comprarCarta()
const carta1DoComputador = comprarCarta()
const carta2DoComputador = comprarCarta()
/* Calcula a soma das cartas de cada usuário chamando o valor de cada carta.
Não entendi como é apenas chamando o valor, o calculo é realizado. 
O objeto carta não deveria ser chamado também? */
const somaUsuario = carta1DoUsuário.valor + carta2DoUsuário.valor
const somaComputador = carta1DoComputador.valor + carta2DoComputador.valor
/* Imprime o nome de usuário que atribuí na variável usuário, cada carta de cada usuário
que foi chamada através da função comprarCarta() e a soma recebida de cada usuário.
*/
// console.log(`Cartas do usuário ${usuario}: ${carta1DoUsuário.texto} ${carta2DoUsuário.texto} Total de pontos do usuário: ${somaUsuario}`);
// console.log(`Cartas do usuário ${computador}: ${carta1DoComputador.texto} ${carta2DoComputador.texto} Total de pontos do computador: ${somaComputador}`);

// Aqui sem imprimir um nome de usuário, pois não foi pedido no projeto
console.log(`Usuário - cartas: ${carta1DoUsuário.texto} ${carta2DoUsuário.texto} - pontuação ${somaUsuario}`);
console.log(`Computador - cartas: ${carta1DoComputador.texto} ${carta2DoComputador.texto} - pontuação ${somaComputador}`);

// verificação com if ternário funciona, porém, não serve para empate
// verificaGanhador = somaUsuario > somaComputador ? console.log(`Usuário venceu!`) :
//                                                   console.log(`Computador venceu`);

// if/else if/else (if else encadeado), verifica quem faz mais pontos ou se dá empate
if (somaUsuario > somaComputador){
  console.log("Usuário venceu");
}else if(somaUsuario < somaComputador){
  console.log("Computador venceu");
}else{
  console.log("Empate");
}

// Caso escolha "Cancelar"
} else { 
  console.log("O jogo acabou");
} 













// const carta = comprarCarta()
// Método que sorteia uma carta. Por exemplo, o rei de ouros 

// console.log(carta.texto) 
// imprime o texto da carta. Nesse caso: "K♦️" 

// console.log(carta.valor) 
// imprime o valor da carta (um número). Nesse caso: 10)



