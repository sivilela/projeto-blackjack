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

const carta1DoUsuário = comprarCarta()
const carta2DoUsuário = comprarCarta()
const carta1DoComputador = comprarCarta()
const carta2DoComputador = comprarCarta()

const somaUsuario = carta1DoUsuário.valor + carta2DoUsuário.valor
const somaComputador = carta1DoComputador.valor + carta2DoComputador.valor

console.log(`Usuário - cartas: ${carta1DoUsuário.texto} ${carta2DoUsuário.texto} - pontuação ${somaUsuario}`);
console.log(`Computador - cartas: ${carta1DoComputador.texto} ${carta2DoComputador.texto} - pontuação ${somaComputador}`);

if (somaUsuario > somaComputador){
  console.log("Usuário venceu");
}else if(somaUsuario < somaComputador){
  console.log("Computador venceu");
}else{
  console.log("Empate");
}

} else { 
  console.log("O jogo acabou");
}