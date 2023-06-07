var readline = require('readline-sync')

console.log(`1 - Para doar R$10`)
console.log(`2 - Para doar R$25`)
console.log(`3 - Para doar R$50`)
console.log(`4 - Para doar Rqualquer valor`)
console.log(`5 - Sair`)
var doacao = readline.question("Opcao: ")

switch(resposta){
    case 1: 
        doacao = 10
        break
    case 2: 
        doacao = 25
        break
    case 3: 
        doacao = 50
        break
    case 4:
        doacao = readline.questionFloat(`Quanto deseja doar: `)
        while(doacao <= 0){
            doacao = readline.questionFloat(`Valor invalido para doacao: `)
        }
        break
    case 5:
        console.log(`Obrigado por participar`)
        break
    default:
        console.log(`Opcao invalida`)
        break
}

if (doacao > 0){
    console.log(`Muito obrigada!Sua doação foi de R$ ${doacao}`)
}