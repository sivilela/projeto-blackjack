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
let arrayUsuario = []
let arrayComputador = []

let somaUsuario = 0
let somaComputador = 0

let cartasDoUsuario = ""
let cartasDoComputador = ""

if (confirm("Boas vindas ao jogo de BlackJack! \nQuer iniciar uma nova rodada?")) {

  arrayUsuario.push(comprarCarta())
  arrayUsuario.push(comprarCarta())
  arrayComputador.push(comprarCarta())
  arrayComputador.push(comprarCarta())

  for (let i = 0; i < arrayUsuario.length; i++) {
    somaUsuario = somaUsuario + arrayUsuario[i].valor
    console.log(somaUsuario);
  }
  for (let i = 0; i < arrayUsuario.length; i++) {
    cartasDoUsuario = cartasDoUsuario + arrayUsuario[i].texto
    console.log(cartasDoUsuario);
  }
  for (let i = 0; i < arrayComputador.length; i++) {
    somaComputador = somaComputador + arrayComputador[i].valor
    console.log(somaComputador);
  }
  for (let i = 0; i < arrayComputador.length; i++) {
    cartasDoComputador = cartasDoComputador + arrayComputador[i].texto
    console.log(cartasDoComputador);
  }
  while (arrayUsuario[0].valor === 11 && arrayUsuario[1].valor === 11 || arrayComputador[0].valor === 11 && arrayComputador[1].valor === 11) {
    arrayUsuario = [comprarCarta(), comprarCarta()]
    arrayComputador = [comprarCarta(), comprarCarta()]
  }
  let pergunta = confirm(`Suas cartas são ${arrayUsuario[0].texto} ${arrayUsuario[1].texto}.\nA carta revelada do computador é ${arrayComputador[0].texto}.\nDeseja comprar outra carta?`);  
    if (pergunta) {
      while (somaUsuario < 21){
        arrayUsuario.push(comprarCarta())
        somaUsuario = somaUsuario + arrayUsuario[arrayUsuario.length - 1].valor
        cartasDoUsuario = cartasDoUsuario + arrayUsuario[arrayUsuario.length - 1].texto

        pergunta = confirm(`Suas cartas são ${cartasDoUsuario}.\nA carta revelada do computador é ${arrayComputador[0].texto}.\nDeseja comprar outra carta?`)
      }
    }else if (pergunta === false){
      while (somaComputador < 21 && somaComputador < somaUsuario) {
        arrayComputador.push(comprarCarta())
        somaComputador = somaComputador + arrayComputador[arrayComputador.length - 1].valor
      }
    }
  }
else {
  alert("O jogo acabou");
}
if (somaComputador <= 21 && (somaComputador > somaUsuario || somaUsuario > 21)) {
  alert(`Usuário - Cartas: ${cartasDoUsuario} - Pontuação: ${somaUsuario}\n
        Computador - Carta: ${cartasDoComputador} - Pontuação: ${somaComputador}\nComputador ganhou!`)
  //break
}else if(somaUsuario <= 21 && (somaUsuario > somaComputador || somaComputador > 21)){
  alert(`Usuário - Cartas: ${cartasDoUsuario} - Pontuação: ${somaUsuario}\nComputador - Carta: ${cartasDoComputador} - Pontuação: ${somaComputador}\nUsuário ganhou!!!`)
  //break              
}else{
  alert(`Usuário - Cartas: ${cartasDoUsuario} - Pontuação: ${somaUsuario}\nComputador - Carta: ${cartasDoComputador} - Pontuação: ${somaComputador}\nEmpate!!!`)
  //pergunta = false
}